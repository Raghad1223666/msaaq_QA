export interface CourseInfo {
  courseTitle: string;
  sectionTitle: string;
  fileTitle?: string;
}

export interface QuizInfo extends CourseInfo {
  quizTitle: string;
  quizSummary: string;
}

export interface QuestionDetails {
  questionText: string;
  options: string[];
  correctOptionNumber: number;
}
