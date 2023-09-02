import React, {FormEvent, useState} from "react"

const options = [
  "General Medicine",
  "Internal Medicine",
  "Primary Care ",
  "Pediatrics",
  "Family Medicine",
  "Obstetrics and Gynecology (OBGYN)",
  "Preventive Medicine",
  "General Surgery",
  "Public Health",
  "Occupation & Industrial Medicine",
]

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("")
  const [showDropdown, setShowDropdown] = useState(false)

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value)
    setShowDropdown(true)
  }

  const handleOptionClick = (event: any, option: string) => {
    setSearchTerm(option)
    setShowDropdown(false)
  }


  const handleOnBlur = () => {
    setShowDropdown(!!searchTerm)
  }
 
  return (
    <div className="mx-4 my-8 ">
      <div className="relative w-[456px]">
        <input
          type="text"
          className="border rounded p-2 w-full h-[56px] border-light-blue"
          placeholder="Pick a Specialty or Type your Doctor's Name"
          value={searchTerm}
          onChange={handleSearchChange}
          onBlur={handleOnBlur}
        />
        <img src="../../assets/images/search_icon.svg" alt="" className="top-[14px] right-[25px] h-[28px] w-[28px] absolute"/>
        {showDropdown && (
          <div className="absolute bg-white rounded-[15px] border-light-grey border mt-2.5 w-full pt-[24px] pl-[32px] pr-[36px] pb-[24px] z-10 max-h-[350px] overflow-y-auto flex gap-10 flex-col">
            {options
              .filter((option) =>
                option.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((option, index) => (
                <div
                  key={index}
                  className="p-2 cursor-pointer hover:bg-gray-200 border border-[#DFDFE6] px-[16px] flex justify-center items-center rounded-[40px] h-[56px]"
                  onClick={(event) => handleOptionClick(event, option)}
                >
                  {option}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchBar
