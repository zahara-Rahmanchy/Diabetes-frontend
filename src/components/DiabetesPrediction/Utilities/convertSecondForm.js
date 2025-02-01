export const convertSecondForm = data => {
  let Gender = data.Sex == 1 ? "Male" : "Female";

  let Age = parseInt(data.age2);
  Gender = Gender.toString();
  let Polyurea = data.Polyurea.toString();
  let Polydipsia = data.Polydipsia.toString();
  let SuddenWeightLoss = data.SuddenWeightLoss.toString();
  let Weakness = data.Weakness.toString();
  let Polyphagia = data.Polyphagia.toString();
  let Genital_thrush = data.GenitalThrush.toString();
  let visual_blurring = data.VisualBluring.toString();
  let Itching = data.Itching.toString();
  let Irritability = data.Irritability.toString();
  let delayed_healing = data.DelayedHealing.toString();
  let partial_paresis = data.PartialParesis.toString();
  let muscle_stiffness = data.MuscleStiffnes.toString();
  let Alopecia = data.Alopecia.toString();
  let Obesity = data.Obesity.toString();

  const secondFormobject = {
    Age: Age,
    Gender: Gender,
    Polyuria: Polyurea,
    Polydipsia: Polydipsia,
    sudden_weight_loss: SuddenWeightLoss,
    weakness: Weakness,
    Polyphagia: Polyphagia,
    Genital_thrush: Genital_thrush,
    visual_blurring: visual_blurring,
    Itching: Itching,
    Irritability: Irritability,
    delayed_healing: delayed_healing,
    partial_paresis: partial_paresis,
    muscle_stiffness: muscle_stiffness,
    Alopecia: Alopecia,
    Obesity: Obesity,
  };
  console.log("secondform", secondFormobject);
  return secondFormobject;
};
