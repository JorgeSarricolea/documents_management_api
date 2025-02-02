/*
  Warnings:

  - You are about to drop the `UserDocument` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `UserDocument` DROP FOREIGN KEY `UserDocument_document_info_id_fkey`;

-- DropForeignKey
ALTER TABLE `UserDocument` DROP FOREIGN KEY `UserDocument_user_id_fkey`;

-- DropTable
DROP TABLE `UserDocument`;

-- CreateTable
CREATE TABLE `user_documents` (
    `user_document_id` VARCHAR(191) NOT NULL,
    `filename` VARCHAR(191) NOT NULL,
    `file_content` TEXT NOT NULL,
    `uploaded_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `document_info_id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`user_document_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user_documents` ADD CONSTRAINT `user_documents_document_info_id_fkey` FOREIGN KEY (`document_info_id`) REFERENCES `DocumentInfo`(`document_info_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_documents` ADD CONSTRAINT `user_documents_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
