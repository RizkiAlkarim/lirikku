/*
  Warnings:

  - You are about to drop the column `password` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `userprofiles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "userprofiles" DROP CONSTRAINT "userprofiles_user_id_fkey";

-- DropIndex
DROP INDEX "users_username_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "password",
DROP COLUMN "username",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "facebook_account" TEXT,
ADD COLUMN     "instagram_account" TEXT,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "twitter_account" TEXT;

-- DropTable
DROP TABLE "userprofiles";
