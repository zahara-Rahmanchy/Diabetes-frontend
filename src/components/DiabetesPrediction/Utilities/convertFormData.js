const convertFormData = (data, bmiResult) => {
  // first form
  let HighBP = parseInt(data.HighBP);
  let HighChol = parseInt(data.HighChol);
  let fruit = parseInt(data.fruit);
  let Veggies = parseInt(data.Veggies);
  let PhyActivity = parseInt(data.PhyActivity);
  let GenHlth = parseInt(data.GenHlth);
  let HeartDiseaseorAttack = parseInt(data.HeartDiseaseorAttack);
  let Sex = parseInt(data.Sex);
  let Age = parseInt(data.Age);
  let Education = parseInt(data.Education);
  let Income = parseInt(data.Income);

  // Convert BMI, MentHlth, and PhysHlth to floats
  let BMI = parseFloat(bmiResult);
  let MentHlth = parseFloat(data.MentHlth);
  let PhysHlth = parseFloat(data.PhysHlth);
  const formDataObject = {
    HighBP: HighBP,
    HighChol: HighChol,
    BMI: BMI,
    HeartDiseaseorAttack: HeartDiseaseorAttack,
    PhysActivity: PhyActivity,
    Fruits: fruit,
    Veggies: Veggies,
    GenHlth: GenHlth,
    MentHlth: MentHlth,
    PhysHlth: PhysHlth,
    Sex: Sex,
    Age: Age,
    Education: Education,
    Income: Income,
  };

  console.log(formDataObject);
  return formDataObject;
};

export default convertFormData;
