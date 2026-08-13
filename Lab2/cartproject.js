import readline from "readline/promises";
import { stdin, stdout } from "process";
import { readFile, writeFile } from "fs/promises";

const FILE = "product.json";

// ================= DATABASE =================

const getCart = async () => {
  try {
    const data = await readFile(FILE, "utf-8");

    if (!data.trim()) {
      return [];
    }

    return JSON.parse(data);
  } catch (error) {
    // If file doesn't exist, create an empty cart
    if (error.code === "ENOENT") {
      await saveCart([]);
      return [];
    }

    console.log("Error reading cart:", error.message);
    return [];
  }
};

const saveCart = async (cart) => {
  await writeFile(FILE, JSON.stringify(cart, null, 2));
};

// ================= ADD PRODUCT =================

const addToCart = async (product) => {
  const cart = await getCart();

  const existingProduct = cart.find(
    (item) => item.id === product.id
  );

  if (existingProduct) {
    existingProduct.qty += product.qty;
    console.log(
      `\n${product.name} quantity updated in 🛒`
    );
  } else {
    cart.push(product);
    console.log(
      `\n${product.name} added to 🛒`
    );
  }

  await saveCart(cart);
};

// ================= DISPLAY CART =================

const displayCart = async () => {
  const cart = await getCart();

  if (cart.length === 0) {
    console.log("\n🛒 Cart is empty\n");
    return;
  }

  console.log("\n========== YOUR CART ==========\n");

  console.table(
    cart.map((item) => ({
      ID: item.id,
      Product: item.name,
      Price: `Rs. ${item.price}`,
      Quantity: item.qty,
      Amount: `Rs. ${item.price * item.qty}`,
    }))
  );

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  console.log(`Total Payable Amount: Rs. ${total}`);
  console.log("===============================\n");
};

// ================= REMOVE PRODUCT =================

const removeProduct = async (id) => {
  const cart = await getCart();

  const index = cart.findIndex(
    (item) => item.id === id
  );

  if (index === -1) {
    console.log("\n❌ Product not found in cart.");
    return;
  }

  const removedProduct = cart[index];

  cart.splice(index, 1);

  await saveCart(cart);

  console.log(
    `\n🗑️ ${removedProduct.name} removed from cart.`
  );
};

// ================= UPDATE QUANTITY =================

const updateQuantity = async (id, quantity) => {
  const cart = await getCart();

  const product = cart.find(
    (item) => item.id === id
  );

  if (!product) {
    console.log("\n❌ Product not found in cart.");
    return;
  }

  if (quantity <= 0) {
    console.log(
      "\n❌ Quantity must be greater than 0."
    );
    return;
  }

  product.qty = quantity;

  await saveCart(cart);

  console.log(
    `\n✅ ${product.name} quantity updated to ${quantity}.`
  );
};

// ================= CHECKOUT =================

const checkout = async () => {
  const cart = await getCart();

  if (cart.length === 0) {
    console.log("\n🛒 Cart is empty. Nothing to checkout.");
    return;
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  console.log("\n========== CHECKOUT ==========");
  console.log(`Total Amount: Rs. ${total}`);
  console.log("Payment Successful ✅");
  console.log("Thank you for shopping with Amazon 🛒");
  console.log("==============================");

  // Empty cart after checkout
  await saveCart([]);
};

// ================= MAIN PROGRAM =================

const main = async () => {
  const cin = readline.createInterface({
    input: stdin,
    output: stdout,
  });

  let choice;

  do {
    console.log(`
=================================
       AMAZON SHOPPING 🛒
=================================

1. Show Cart
2. Add Product
3. Remove Product
4. Update Quantity
5. Checkout
6. Exit

=================================
`);

    choice = await cin.question("Enter your choice: ");

    switch (Number(choice)) {

      // -------- SHOW CART --------
      case 1:
        await displayCart();
        break;

      // -------- ADD PRODUCT --------
      case 2: {
        const item = await cin.question(
          "Enter id,name,price,qty: "
        );

        const [id, name, price, qty] = item
          .split(",")
          .map((p) => p.trim());

        const productId = Number(id);
        const productPrice = Number(price);
        const productQty = Number(qty);

        if (
          !id ||
          !name ||
          !Number.isFinite(productId) ||
          !Number.isFinite(productPrice) ||
          !Number.isFinite(productQty)
        ) {
          console.log("\n❌ Invalid product details.");
          break;
        }

        if (productPrice <= 0 || productQty <= 0) {
          console.log(
            "\n❌ Price and quantity must be greater than 0."
          );
          break;
        }

        await addToCart({
          id: productId,
          name,
          price: productPrice,
          qty: productQty,
        });

        break;
      }

      // -------- REMOVE PRODUCT --------
      case 3: {
        const id = Number(
          await cin.question(
            "Enter product ID to remove: "
          )
        );

        if (!Number.isFinite(id)) {
          console.log("\n❌ Invalid product ID.");
          break;
        }

        await removeProduct(id);
        break;
      }

      // -------- UPDATE QUANTITY --------
      case 4: {
        const id = Number(
          await cin.question(
            "Enter product ID: "
          )
        );

        const quantity = Number(
          await cin.question(
            "Enter new quantity: "
          )
        );

        if (!Number.isFinite(id) || !Number.isFinite(quantity)) {
          console.log("\n❌ Invalid input.");
          break;
        }

        await updateQuantity(id, quantity);
        break;
      }

      // -------- CHECKOUT --------
      case 5:
        await checkout();
        break;

      // -------- EXIT --------
      case 6:
        console.log("\n👋 Thank you! Visit again.");
        break;

      // -------- INVALID --------
      default:
        console.log(
          "\n🛑 Invalid choice! Please try again."
        );
    }

  } while (Number(choice) !== 6);

  cin.close();
};

main();