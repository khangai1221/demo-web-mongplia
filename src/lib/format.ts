export const formatMNT = (amount: number) =>
  new Intl.NumberFormat("mn-MN").format(amount) + "₮";

export const generateOrderNumber = () => {
  const n = Math.floor(Math.random() * 999999) + 1;
  return "MM-" + n.toString().padStart(6, "0");
};
