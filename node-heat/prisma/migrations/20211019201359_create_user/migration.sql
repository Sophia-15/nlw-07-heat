-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "github_id" INTEGER NOT NULL,
    "login" TEXT NOT NULL,
    "avatar_url" TEXT NOT NULL
);
