/*
  Warnings:

  - You are about to drop the `tarif_plans` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Subscription" DROP CONSTRAINT "Subscription_tarif_plan_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."SubscriptionHistory" DROP CONSTRAINT "SubscriptionHistory_tarifPlanId_fkey";

-- DropTable
DROP TABLE "public"."tarif_plans";

-- CreateTable
CREATE TABLE "public"."tariff_plans" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "duration" INTEGER NOT NULL DEFAULT 30,
    "max_courses" INTEGER NOT NULL,

    CONSTRAINT "tariff_plans_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tariff_plans_name_key" ON "public"."tariff_plans"("name");

-- AddForeignKey
ALTER TABLE "public"."Subscription" ADD CONSTRAINT "Subscription_tarif_plan_id_fkey" FOREIGN KEY ("tarif_plan_id") REFERENCES "public"."tariff_plans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SubscriptionHistory" ADD CONSTRAINT "SubscriptionHistory_tarifPlanId_fkey" FOREIGN KEY ("tarifPlanId") REFERENCES "public"."tariff_plans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
