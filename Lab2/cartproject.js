import readline from "readline/promises";
import { stdin, stdout } from "process";
import { readFile, writeFile } from "fs/promises";

const FILE = "product.json";

const getcart = async () => {
        const data = await readFile(FILE, "utf-8");
        return data.trim() ? JSON.parse(data) : [];
   
};

const savecart = async (cart) => {
    await writeFile(FILE, JSON.stringify(cart, null, 2));
};

const addToCart = async (product) => {
    const cart = await getcart();

    const item = cart.find((p) => p.id === product.id);

    if (item) {
        item.qty += product.qty;
    } else {
        cart.push(product);
    }

    await savecart(cart);
    console.log(`${product.name} added to 🛒`);
};


const displayCart = async () => {
    const cart = await getcart();

    if (cart.length === 0) {
        console.log("🛒 Cart is Empty");
        return;
    }

    console.table(cart);

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );

    console.log(`Total Payable Amount: Rs. ${total}`);
};


const main = async () => {
    const cin = readline.createInterface({
        input: stdin,
        output: stdout,
    });

    let choice;

    console.log("====== Welcome to Amazon Shopping 🛒 ======");

    do {
        console.log("\n1.........Show Cart");
        console.log("2...........Add Product");
        console.log("3...........Remove Product");
        console.log("4...........Update Quantity");
        console.log("5...........Checkout");

        choice = Number(await cin.question("Enter your Choice: "));

        switch (choice) {
            case 1:
                displayCart();
                break;

            case 2: {
                const input = await cin.question(
                    "Enter id,name,price,qty: "
                );

                const parts = input.split(",");
               const [id, name, price, qty] = parts.map((p) => p.trim());

                await addToCart({
                    id: Number(id),
                    name,
                    price: Number(price),
                    qty: Number(qty),
                });

                break;
            }

            case 3:
                console.log("Remove Product");
                break;

            case 4:
                console.log("Update Quantity");
                break;

            case 5:
                console.log("Thank you for Shopping! 🛍️");
                break;

            default:
                console.log("Invalid Choice!");
        }
    } while (choice !== 5);

    cin.close();
};

main();