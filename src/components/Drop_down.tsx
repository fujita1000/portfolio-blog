import { useState, useEffect } from 'react';
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
      <div className='relative -my-24 flex justify-center'>
        <div className='flex w-10/12 justify-between '>
          <label className='w-5/12'>
            <h2 className='text-center text-5xl text-wtext'>エージェント選択</h2>
            <form>
              <div>
                <select
                  className='my-4 h-16 w-full rounded-xl border-4 border-solid border-btext bg-main text-center text-3xl text-wtext'
                  name='agent'
                  id='agent'
                  onChange={(e) => onChangeAgent(e)}
                >
                  <option value=''> ALL </option>
                  <option value='ブリム'>ブリム</option>
                  <option value='フェニックス'>フェニックス</option>
                  <option value='セージ'>セージ</option>
                  <option value='ソーヴァ'>ソーヴァ</option>
                  <option value='ヴァイパー'>ヴァイパー</option>
                  <option value='サイファー'>サイファー</option>
                  <option value='レイナ'>レイナ</option>
                  <option value='キルジョイ'>キルジョイ</option>
                  <option value='ブリーチ'>ブリーチ</option>
                  <option value='オーメン'>オーメン</option>
                  <option value='ジェット'>ジェット</option>
                  <option value='レイズ'>レイズ</option>
                  <option value='スカイ'>スカイ</option>
                  <option value='ヨル'>ヨル</option>
                  <option value='アストラ'>アストラ</option>
                  <option value='KAY/O'>KAY/O</option>
                  <option value='チェンバー'>チェンバー</option>
                  <option value='ネオン'>ネオン</option>
                  <option value='フェイド'>フェイド</option>
                  <option value='ハーバー'>ハーバー</option>
                </select>
              </div>
            </form>
          </label>

          <label className='w-5/12 '>
            <h2 className='text-center text-5xl text-wtext'>マップ選択</h2>
            <form>
              <div>
                <select
                  className='my-4 h-16 w-full rounded-xl border-4 border-solid border-btext bg-main text-center text-3xl text-wtext'
                  name='map'
                  id='map'
                  onChange={(e) => onChangeMap(e)}
                >
                  <option value=''>ALL</option>
                  <option value='パール'>パール</option>
                  <option value='フラクチャー'>フラクチャー</option>
                  <option value='ブリーズ'>ブリーズ</option>
                  <option value='アイスボックス'>アイスボックス</option>
                  <option value='バインド'>バインド</option>
                  <option value='ヘイブン'>ヘイブン</option>
                  <option value='スプリット'>スプリット</option>
                  <option value='アセント'>アセント</option>
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