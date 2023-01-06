import Image from 'next/image';
import React from 'react';

const Profile = () => {
  return (
    <>
      <div className='h-[478px] w-full bg-main'>
        <div className='relative top-[15px] m-auto h-[150px] w-[150px] rounded-2xl'>
          <Image
            src={'/dev/oomiya.jpg'}
            alt='大宮のロゴ'
            layout='fill'
            objectFit='contain'
            className='rounded-[50%]'
          />
        </div>
        <div className='m-auto mt-10 w-11/12 text-center'>
          <h3 className='text-3xl text-wtext'>大宮</h3>
          <p className='mt-4 text-wtext'>
            配信を見るのが好きでいつも誰かしらの配信に張り付いてます。趣味はValorantで、勉強した空爆を成功させたときの野良VCの「うおおおおおおおお」が好きすぎるので空爆研究してます。まじで最高な気分になるので空爆共有するので実践してください。
          </p>
          <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/OomiyaGG'><p className='mt-4 text-blue-200'>→Twitter:OomiyaGG</p></a>
        </div>
      </div>
    </>
  );
};

export default Profile;
