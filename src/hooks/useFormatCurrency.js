import { useCallback } from "react";

export function useFormatCurrency() {
  const formatCurrency = useCallback((amount) => {
    if (isNaN(amount)) return "";

    return new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency: "KES",
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(amount);
  }, []);

  return formatCurrency;
}
