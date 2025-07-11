export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
}

export const projects: Project[] = [
  {
    title: "Crop-yield-Predictor",
    description:
      " A system or model that forecasts the potential amount of agricultural produce from a specific area and crop during a given season. ",
    tags: ["NumPy", "Pandas", "Scikit Learn", "Matplotlib"],
    github: "https://github.com/hitharth8231/Crop-yield-Predictor",
  
  },

   {
    title: "-Restaurant-rating-predictor",
    description:
      " A Model that rates about some particular restaurants on the basis of location , couisine etc. ",
    tags: ["NumPy", "Pandas", "Regression","Scikit Learn", "Matplotlib"],
    github: "https://github.com/hitharth8231/-Restaurant-rating-predictor",
  
  },

   {
    title: "Expense-Tracker-DBMS-project",
    description:
      " A Data base project , made for maintaining daily or monthly expences of a common man  ",
    tags: ["DBMS", "MySQL"],
    github: "https://github.com/hitharth8231/Expense-Tracker-DBMS-project",
  
  },

  
];
