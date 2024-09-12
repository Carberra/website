import sys

from currency_converter import CurrencyConverter

if __name__ == "__main__":
    c = CurrencyConverter()
    converted = c.convert(amount := int(sys.argv[1]), "GBP", "USD")
    print(f"{amount:.2f} GBP = {converted:.2f} USD")
