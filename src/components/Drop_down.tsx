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
      <div className='relative -my-24 flex justify-center '>
        <div className='mb-10 flex w-11/12 justify-between'>
          <label className='w-5/12'>
            <h2 className='text-center text-5xl text-wtext'>エージェント選択</h2>
            <form className='relative h-11 w-full'>
              <div className='absolute inset-y-2/4 left-4'>
                <Image src={'/down_logo.svg'} alt='select画像' width={60} height={60} />
              </div>
              <div>
                <select
                  className='my-4 h-16 w-full  border-4 border-solid border-yellow-300 bg-main text-center text-2xl text-wtext'
                  name='agent'
                  id='agent'
                  onChange={(e) => onChangeAgent(e)}
                >
                  <option value=''> ALL </option>
                  <option value='アストラ'>アストラ</option>
                  <option value='ヴァイパー'>ヴァイパー</option>
                  <option value='オーメン'>オーメン</option>
                  <option value='キルジョイ'>キルジョイ</option>
                  <option value='KAY/O'>KAY/O</option>
                  <option value='サイファー'>サイファー</option>
                  <option value='ジェット'>ジェット</option>
                  <option value='スカイ'>スカイ</option>
                  <option value='セージ'>セージ</option>
                  <option value='ソーヴァ'>ソーヴァ</option>
                  <option value='チェンバー'>チェンバー</option>
                  <option value='ネオン'>ネオン</option>
                  <option value='ハーバー'>ハーバー</option>
                  <option value='フェイド'>フェイド</option>
                  <option value='フェニックス'>フェニックス</option>
                  <option value='ブリーチ'>ブリーチ</option>
                  <option value='ブリム'>ブリム</option>
                  <option value='ヨル'>ヨル</option>
                  <option value='レイズ'>レイズ</option>
                  <option value='レイナ'>レイナ</option>
                </select>
              </div>
            </form>
          </label>

          <label className='w-5/12 '>
            <h2 className='text-center text-5xl text-wtext'>マップ選択</h2>
            <form className='relative h-11 w-full '>
              <div className='absolute inset-y-2/4 left-4'>
                <Image src={'/down_logo.svg'} alt='select画像' width={60} height={60} />
              </div>
              <div>
                <select
                  className='my-4 h-16 w-full border-4 border-solid border-yellow-300 bg-main text-center text-2xl text-wtext'
                  name='map'
                  id='map'
                  onChange={(e) => onChangeMap(e)}
                >
                  <option value=''>ALL</option>
                  <option value='アイスボックス'>アイスボックス</option>
                  <option value='アセント'>アセント</option>
                  <option value='スプリット'>スプリット</option>
                  <option value='バインド'>バインド</option>
                  <option value='パール'>パール</option>
                  <option value='フラクチャー'>フラクチャー</option>
                  <option value='ブリーズ'>ブリーズ</option>
                  <option value='ヘイブン'>ヘイブン</option>
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