import Image from "next/image";
import { useEffect } from 'react';

interface DropDownFrom {
  agent:any,
  map:any,
  onChangeAgent: (event: any) => void;
  onChangeMap: (event: any) => void;
}
const Drop_down = ({ onChangeAgent, onChangeMap }: DropDownFrom) => {
  useEffect(() => {});

  return (
    <>
      <div className='relative -my-14 flex justify-center md:-my-[80px] 2xl:-my-[100px]'>
        <div className='mb-10 flex w-11/12 justify-between'>
          <label className='mt-[3px] w-5/12'>
            <h2 className='text-1xl text-center text-btext md:text-[30px] 2xl:text-[40px] '>
              カテゴリー１選択
            </h2>
            <form className='relative -mt-[10px] h-11 w-full'>
              <div className='absolute inset-y-2/4 left-[10px] md:left-[15px]'>
                <div className='relative hidden h-[30px] w-[30px] md:flex md:h-[40px] md:w-[40px]  2xl:h-[50px]  2xl:w-[50px]'>
                  <Image
                    src={'/dev/down_logo.svg'}
                    alt='select画像'
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
              </div>
              <div>
                <select
                  className='text-1xl my-4 h-[40px] w-full border-[3px] border-solid border-yellow-300 bg-main  indent-[15px] text-wtext  md:h-[50px] md:indent-[70px] md:text-[25px] xl:indent-[100px] 2xl:h-[60px] 2xl:text-[35px] '
                  name='agent'
                  id='agent'
                  onChange={(e) => onChangeAgent(e)}
                >
                  <option value=''> ALL </option>
                  <option value='html'>HTML</option>
                  <option value='css'>CSS</option>
                  <option value='javascript'>JavaScript</option>
                  <option value='typescript'>TypeScript</option>
                  <option value='jquery'>jQuery</option>
                  <option value='gsap'>GSAP</option>
                  <option value='npm'>NPM</option>
                </select>
              </div>
            </form>
          </label>

          <label className='mt-[3px] w-5/12'>
            <h2 className='text-1xl text-center text-btext md:text-[30px] 2xl:text-[40px] '>
              カテゴリー２選択
            </h2>
            <form className='relative -mt-[10px] h-11 w-full'>
              <div className='absolute inset-y-2/4 left-[10px] md:left-[15px]'>
                <div className='relative hidden h-[30px]  w-[30px] md:flex md:h-[40px] md:w-[40px]  2xl:h-[50px]  2xl:w-[50px]'>
                  <Image
                    src={'/dev/down_logo.svg'}
                    alt='select画像'
                    layout='fill'
                    objectFit='contain'
                    className=''
                  />
                </div>
              </div>
              <div>
                <select
                  className='text-1xl my-4 h-[40px] w-full border-[3px] border-solid border-yellow-300 bg-main  indent-[15px] text-wtext md:h-[50px] md:indent-[70px] md:text-[25px] xl:indent-[100px] 2xl:h-[60px] 2xl:text-[35px] '
                  name='map'
                  id='map'
                  onChange={(e) => onChangeMap(e)}
                >
                  <option value=''> ALL </option>
                  <option value='html'>HTML</option>
                  <option value='css'>CSS</option>
                  <option value='javascript'>JavaScript</option>
                  <option value='typescript'>TypeScript</option>
                  <option value='jquery'>jQuery</option>
                  <option value='gsap'>GSAP</option>
                  <option value='npm'>NPM</option>
                </select>
              </div>
            </form>
          </label>
        </div>
      </div>
    </>
  );
};

export default Drop_down