import { doc } from "firebase/firestore";

export default function Form({ fields }) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
   db.collection("reserva").add(data) 
   .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
   })
   .catch
    (error => {
      console.error("Error adding document: ", error);
    });
  }
  
  return (
    <div className="w-40 h-40 flex mt-4">
      <div className="container flex gap-2 p-5 text-cyan-600 border border-solid items-center justify-center">
        <form className="flex flex-col w-[300px] h-35" onSubmit={handleSubmit(onSubmit)}>
          {fields.map((field) => (
            <label htmlFor={field.name} key={field.name}>
              {field.label}
              <input {...register(field.name)} placeholder={field.placeholder} className={field.className} />
            </label>
          ))}
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}