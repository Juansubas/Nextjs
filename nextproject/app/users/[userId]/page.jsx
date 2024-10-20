"use client"

function UserPage({params}) {
    console.log(params)
  return (
    <div>

        <button onClick={() => {
            console.log('works!!!');
        }}>
            Click
        </button>

    </div>
  )
}

export default UserPage