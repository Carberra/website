import sys

from currency_converter import CurrencyConverter

if __name__ == "__main__":
    c = CurrencyConverter()

    to_usd = c.convert(amount := int(sys.argv[1]), "GBP", "USD")
    print(f"{amount:.2f} GBP = {to_usd:.2f} USD")

    to_gbp = c.convert(amount := int(sys.argv[1]), "USD", "GBP")
    print(f"{amount:.2f} USD = {to_gbp:.2f} GBP")
