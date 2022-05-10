import Image from 'next/image'
import React from 'react'
import { ConnectButton } from 'web3uikit'
const isAuthenticated=false
const styles=
{
  container:'h-full w-[300px] flex flex-col bg-[#fff] static'
}
const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        {
          isAuthenticated && (
            <>
            <div className={styles.profilePicContainer}>
              <Image
              alt='profile'
              className={styles.profilePic}
              height={100}
              width={100}
              />
            </div>
            { !username ?  (
              <>
             <div className={styles.username}>
              <input 
              type='text'
              placeholder='Username ....'
              className={usernameInput}
             // value={nickname}
            //  onChange={e=>setNickname(e.target.value)}
            />
              </div>
              <button 
              className={styles.setNickname}
              // onClick={handleSetUserName}
            > Set Nickname
            </button>
            </>
            ) : (
            <div>
              <div className={styles.welcome}> Welcome Subash
              </div>
              )
                </div>
        )}
      </div>
    </div>
  )
}

export default Sidebar