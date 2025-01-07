/*
  Warnings:

  - The primary key for the `Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `DocumentInfo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Role` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `UserDocument` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `DocumentInfo` DROP FOREIGN KEY `DocumentInfo_category_id_fkey`;

-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_role_id_fkey`;

-- DropForeignKey
ALTER TABLE `UserDocument` DROP FOREIGN KEY `UserDocument_document_info_id_fkey`;

-- DropForeignKey
ALTER TABLE `UserDocument` DROP FOREIGN KEY `UserDocument_user_id_fkey`;

-- DropIndex
DROP INDEX `DocumentInfo_category_id_fkey` ON `DocumentInfo`;

-- DropIndex
DROP INDEX `User_role_id_fkey` ON `User`;

-- DropIndex
DROP INDEX `UserDocument_document_info_id_fkey` ON `UserDocument`;

-- DropIndex
DROP INDEX `UserDocument_user_id_fkey` ON `UserDocument`;

-- AlterTable
ALTER TABLE `Category` DROP PRIMARY KEY,
    MODIFY `category_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`category_id`);

-- AlterTable
ALTER TABLE `DocumentInfo` DROP PRIMARY KEY,
    MODIFY `document_info_id` VARCHAR(191) NOT NULL,
    MODIFY `category_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`document_info_id`);

-- AlterTable
ALTER TABLE `Role` DROP PRIMARY KEY,
    MODIFY `role_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`role_id`);

-- AlterTable
ALTER TABLE `User` DROP PRIMARY KEY,
    MODIFY `user_id` VARCHAR(191) NOT NULL,
    MODIFY `role_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`user_id`);

-- AlterTable
ALTER TABLE `UserDocument` DROP PRIMARY KEY,
    MODIFY `user_document_id` VARCHAR(191) NOT NULL,
    MODIFY `document_info_id` VARCHAR(191) NOT NULL,
    MODIFY `user_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`user_document_id`);

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `Role`(`role_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserDocument` ADD CONSTRAINT `UserDocument_document_info_id_fkey` FOREIGN KEY (`document_info_id`) REFERENCES `DocumentInfo`(`document_info_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserDocument` ADD CONSTRAINT `UserDocument_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DocumentInfo` ADD CONSTRAINT `DocumentInfo_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `Category`(`category_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
