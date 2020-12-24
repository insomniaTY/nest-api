-- CreateTable
CREATE TABLE "Products" (
"id" SERIAL,
    "name" TEXT NOT NULL,
    "products_price" INTEGER NOT NULL,
    "id_category" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categories" (
"id" SERIAL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Basket" (
"id" SERIAL,
    "quantity" INTEGER NOT NULL,
    "id_product" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
"id" SERIAL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "street_adress" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "postCode" INTEGER NOT NULL,
    "phone" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "discount" INTEGER NOT NULL,
    "delivery" INTEGER NOT NULL,
    "subtotal" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);
