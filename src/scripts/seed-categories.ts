import { db } from "@/db";
import { categories } from "@/db/schema";

const categoryNames = [
  "Electronics",
  "Books",
  "Clothing",
  "Home & Kitchen",
  "Sports & Outdoors",
  "Toys & Games",
  "Health & Personal Care",
  "Automotive",
  "Beauty & Personal Care",
  "Pet Supplies",
  "Cricket",
  "Cinema",
  "Tollywood",
];

async function main() {
  try {
    const values = categoryNames.map((name) => ({
      name,
      description: `Videos related to ${name}`,
    }));

    await db.insert(categories).values(values);
    console.log("Categories seeded successfully!");
  } catch (error) {
    console.error("Error seeding categories:", error);
    process.exit(1);
  }
}

main();
