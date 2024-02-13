"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/utils/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "react-toastify";
import { Calendar } from "./calendar";

const FormSchema = z.object({
  dob: z.date().optional(),
});

export function CalendarForm() {
  const {
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(FormSchema),
  });

  const dobValue = watch("dob");

  const onSubmit = (data) => {
    toast(
      `You submitted the following values: ${JSON.stringify(data, null, 2)}`
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="flex flex-col">
        <label className=""></label>
        <Popover>
          <PopoverTrigger asChild>
            <div>
              <Button
                variant="outline"
                className={cn(
                  "w-[240px] pl-3 text-left font-normal",
                  !dobValue && "text-muted-foreground"
                )}
              >
                {dobValue ? (
                  format(dobValue, "PPP")
                ) : (
                  <span className=" font-black text-lg">Date of birth</span>
                )}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={dobValue}
              onSelect={(date) => setValue("dob", date)}
              disabled={(date) =>
                date > new Date() || date < new Date("1900-01-01")
              }
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <p>Your date of birth is used to calculate your age.</p>
        {errors.dob && <p>{errors.dob.message}</p>}
      </div>
      <Button onSubmit type="submit">Aceptar</Button>
    </form>
  );
  
}
console.log(Button);
export default CalendarForm;
