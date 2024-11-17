const text = `
Personal Details:
- Name: John Doe
- Username: jdoe_123
- Email: john.doe@example.com
- Phone Number: +1-800-555-1234
- Address: 123 Main St, Springfield, IL 62704
- Postal Code: 62704
- Website: www.johndoe.com

Dates:
- Date of Birth: 15/03/1990
- Start Date: 2024-08-15
- End Date: 2025-12-31
- Last Updated: 2023/09/17
- Event Date: 2024-12-25

Product Info:
- Product ID: PROD-12345
- Order Number: ORD-67890
- Price: $19.99, $45.00, $100.99

Credit Card Numbers:
- Visa: 4111 1111 1111 1111
- MasterCard: 500 0000 0000 0004
- Amex: 782 8224 6310 005

URL and Links:
- Visit our site: www.example.com
- Related link: https://shop.example.com/products
- Non-secure link: http://www.oldsite.com/

Random Text:
The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia libero et dolor tincidunt, ac interdum ante dignissim.
aaaaa
aaa
aa
`;

let regex = /s/g;
const emailPattern = /\b[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-z]{2,}\b/g;
const websitePattern = /\w+:\/\/[\w\.\d]+\//g;
const creditCardPattern = /\d{4} \d{4} \d{4} \d{4}/g;

console.log(text.match(regex));
