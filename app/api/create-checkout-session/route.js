import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const POST = async (req) => {
  try {
    const { name, email, phone, selectedDate } = await req.json();

    // Logowanie danych przed wysłaniem do Stripe
    console.log("Tworzenie sesji płatności z danymi:", {
      name,
      email,
      phone,
      selectedDate,
    });

    if (!name || !email || !selectedDate) {
      return new Response(
        JSON.stringify({ error: "Brak wymaganych danych." }),
        {
          status: 400,
        }
      );
    }

    // Tworzenie sesji Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "pln",
            product_data: {
              name: `Zadatek na spotkanie z ${name}`,
            },
            unit_amount: 10000, // 100 PLN w groszach
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      payment_intent_data: {
        metadata: {
          name,
          email,
          phone,
          selectedDate,
        },
      },
      success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/cancel`,
    });

    console.log("Sesja Stripe utworzona:", session);

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
    });
  } catch (error) {
    console.error("Błąd przy tworzeniu sesji Stripe:", error);
    return new Response(
      JSON.stringify({ error: "Błąd podczas tworzenia sesji płatności." }),
      { status: 500 }
    );
  }
};
