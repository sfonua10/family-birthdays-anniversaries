export default function Month({ month = '', celebrantsObj = [] }) {
  const date = new Date(new Date());
  const todaysDate = new Date().toLocaleDateString('pt-br').split( '/' ).reverse( ).join( '-' );
  return (
    <>
      <div className="flex flex-col mt-8">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
            <table className="min-w-full table-fixed">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xl leading-4 font-medium text-gray-500 uppercase tracking-wider text-center w-20">
                    {month}
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xl leading-4 font-medium text-gray-500 uppercase tracking-wider w-20"></th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider w-60"></th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider w-20">
                    Age
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white">
                {JSON.parse(JSON.stringify(celebrantsObj))?.map((celebrant) => {
                  const isBirthday = todaysDate?.slice(5) === celebrant?.birthdate?.slice(5);
                  return (
                    <tr className={`${isBirthday ? 'bg-yellow-200 ' : ''}`}>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="flex items-center justify-around">
                          <div>
                            <p className={`${isBirthday ? 'animate-bounce' : ''} ordinal text-2xl`}>{celebrant?.day}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className={`${isBirthday ? 'animate-bounce' : ''} h-10 w-10 rounded-full`} 
                            // src={`"${celebrant.imageUrl}?rect=${`${celebrant?.image?.hotspot?.x},${celebrant?.image?.hotspot?.y},${celebrant?.image?.hotspot?.width},${celebrant?.image?.hotspot?.height}`}"`}
                            src={celebrant?.imageUrl}
                            alt=""
                          />
                        </div>
                      </td>
                      <td className="py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className={`${isBirthday ? 'animate-bounce' : ''} text-xl leading-5 font-medium text-gray-900`}>
                            {celebrant?.celebrant}
                          </div>
                      </td>

                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className={`${isBirthday ? 'animate-bounce' : ''} text-sm leading-5 text-gray-900`}>
                          {celebrant?.age}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
