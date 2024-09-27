import classes from "./Success.module.scss";

const Success = () => {
  return (
    <div className={classes.successContainer}>
      <h1 className={classes.success}>Twoja rezerwacja zakończona sukcesem!</h1>
      <p className={classes.message}>Odezwiemy się do Ciebie wkrótce</p>
    </div>
  );
};

export default Success;
