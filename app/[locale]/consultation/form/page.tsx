import ConsultationForm from "@/app/components/consultation/consultationForm";

export default function ConsultationFormPage() {
  return (
    <div className={`flex flex-col indents-main-container  rounded-medium flex-1 items-center`}>
            <div className={`flex w-full flex-col flex-1 max-w-6xl  rounded-large bg-primary-color/20 shadow-lg backdrop-blur-md border border-primary-color/30 p-4`}>
                <div>         
                    <ConsultationForm />
                </div>
            </div>
    </div>
  )
}
