-- CreateTable
CREATE TABLE "public"."LessonWebinar" (
    "id" TEXT NOT NULL,
    "lessonId" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "connectTime" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "LessonWebinar_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LessonWebinar_lessonId_key" ON "public"."LessonWebinar"("lessonId");

-- AddForeignKey
ALTER TABLE "public"."LessonWebinar" ADD CONSTRAINT "LessonWebinar_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "public"."Lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
