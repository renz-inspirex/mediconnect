import { MedicineService } from "@/services/medicine.service"
import {atom, selector} from "recoil"

export const isMedicineModalOpen = atom({
  key: "isMedicineModalOpen",
  default: false,
})

export const symptoms = atom({
  key: "symptoms",
  default: ''
})


export const getPossibleMedicine = selector({
  key: 'getPossibleMedicine',
  get: async ({get}) => {
    const _symptoms = get(symptoms)

    const medicinesService = MedicineService.getInstance()
    const result = await medicinesService.getPossibleMedicine(_symptoms)
    return { result: result.data, symptoms: _symptoms}
  }
})