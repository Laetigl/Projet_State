import React,{useState} from 'react'

export default function Personal(props) {
    const [searchTermName, setSearchTermName] = useState('');
    const [searchTermMail, setSearchTermMail] = useState('');
    const [searchTermPhone, setSearchTermPhone] = useState('');

    const handleSearchName = (e) => {
        setSearchTermName(e.target.value);
    };
    const handleSearchMail = (e) => {
        setSearchTermMail(e.target.value);
    };
    const handleSearchPhone = (e) => {
        setSearchTermPhone(e.target.value);
    };

  return (
    <div className='flex flex-col gap-[28px] md:items-center items-center justify-center lg:w-[70%] w-[100%] '>
        <div className='w-[100%] md:w-[500px] flex flex-col justify-center items-center pt-[25px] md:items-center'>
            <h1 className='text-[30px] text-[#02295a] font-bold'>Personal info</h1>
            <p className='lg:text-[15px] md:text-[15px] text-[11px] text-[#9699ab] pb-[20px] text-center '>Please provide your name, email address and phone number.</p>
        </div>
        <div className='flex flex-col gap-[20px] md:w-[400px] w-[270px] '>
            <label className='flex flex-col gap-[5px]'>
                 <p className='text-[#02295a] font-bold text-[14px]'>Your name is : {searchTermName}</p>
                <input name="postContent" cols="30" rows="10" className='p-[10px] border border-[#9699ab] rounded-xl h-[40px] text-[#d6d9e6] text-[10px]' type="text" value={searchTermName} onChange={(e) => handleSearchName(e)}>
                </input>
            </label>
            <label className='flex flex-col gap-[5px]'>
                 <p className='text-[#02295a] font-bold text-[14px]'>Your email is : {searchTermMail}</p>
                <input name="postContent" cols="30" rows="10"  className='p-[10px] border border-[#9699ab] rounded-xl h-[40px] text-[#d6d9e6] text-[10px]' type="text" value={searchTermMail} onChange={(e) => handleSearchMail(e)}>
                </input>
            </label>
            <label className='flex flex-col gap-[5px]'>
                 <p className='text-[#02295a] font-bold text-[14px]'>Your phone number is : {searchTermPhone}</p>
                <input name="postContent" type="tel" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" cols="30" rows="10" className='p-[10px] border border-[#9699ab] rounded-xl h-[40px] text-[#d6d9e6] text-[10px]' value={searchTermPhone} onChange={(e) => handleSearchPhone(e)}>
                </input>
            </label>
        </div>
        <div className='flex gap-[300px] lg:pt-[15px] lg:ps-[320px] pt-[20px] lg:pb-0 md:pb-0 pb-[10px] '>
            <button 
            // Mettre dans la propriété "disabled" que chaque barre de cherche 
            disabled={searchTermName === "" || searchTermMail==="" || searchTermPhone===""}
            onClick={() => props.setButtonStep("selectplan")} className='bg-[#02295a] text-white w-[100px] p-[10px] rounded-xl'>
            Next Step
            </button>
        </div>
        
    </div>
  )
}