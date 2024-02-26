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
    <div className='flex flex-col gap-[10px] '>
        <div className='w-[100%] flex flex-col justify-center items-start pt-[25px]'>
            <h1 className='text-[30px] text-[#02295a] font-bold'>Personal info</h1>
            <p className='text-[15px] text-[#9699ab] pb-[20px]'>Please provide your name, email address and phone number.</p>
        </div>
        <div className='flex flex-col gap-[20px]'>
            <label className='flex flex-col'>
                 <p className='text-bold'>Your name is : {searchTermName}</p>
                <input name="postContent" cols="30" rows="10" className='p-[10px] border border-[#9699ab] rounded-xl h-[40px] text-[#d6d9e6] text-[10px]' type="text" value={searchTermName} onChange={(e) => handleSearchName(e)}>
                </input>
            </label>
            <label className='flex flex-col'>
                 <p className='text-bold'>Your email is : {searchTermMail}</p>
                <input name="postContent" cols="30" rows="10"  className='p-[10px] border border-[#9699ab] rounded-xl h-[40px] text-[#d6d9e6] text-[10px]' type="text" value={searchTermMail} onChange={(e) => handleSearchMail(e)}>
                </input>
            </label>
            <label className='flex flex-col'>
                 <p className='text-bold'>Your phone number is : {searchTermPhone}</p>
                <input name="postContent" cols="30" rows="10" className='p-[10px] border border-[#9699ab] rounded-xl h-[40px] text-[#d6d9e6] text-[10px]' type="text" value={searchTermPhone} onChange={(e) => handleSearchPhone(e)}>
                </input>
            </label>
        </div>
        <button onClick={() => props.setButtonStep("selectplan")} className='bg-[#02295a] text-white w-[100px] p-[10px] rounded-xl absolute top-[86%] right-[27%]'>
        Next Step
        </button>
        
    </div>
  )
}