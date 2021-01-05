function calcAge(dateString) {
  var birthday = +new Date(dateString);
  return ~~((Date.now() - birthday) / (31557600000));
}

export default function Month({ month, celebrants}) {
  celebrants.map(c => calcAge(c.birthdate))
  return (
    <>
    <div className="flex flex-col mt-8">
      <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
          <table className="min-w-full">
            <thead>
              <tr>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xl leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  {month}
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Age
                </th>
              </tr>
            </thead>

            <tbody className="bg-white">
              {celebrants?.map((celebrant) => {
                // const [height, width, x, y] = celebrant?.image?.hotspot;
                console.log(`${celebrant.imageUrl}?rect=${`${celebrant?.image?.hotspot?.x},${celebrant?.image?.hotspot?.y},${celebrant?.image?.hotspot?.width},${celebrant?.image?.hotspot?.height}`}`)
                return(
                <tr>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={`"${celebrant.imageUrl}?rect=${`${celebrant?.image?.hotspot?.x},${celebrant?.image?.hotspot?.y},${celebrant?.image?.hotspot?.width},${celebrant?.image?.hotspot?.height}`}"`}
                          alt=""
                        />
                      </div>

                      <div className="ml-4">
                        <div className="text-xl leading-5 font-medium text-gray-900">
                          {celebrant.celebrant}
                        </div>
                        {/* <div className="text-sm leading-5 text-gray-500">
                          john@example.com
                        </div> */}
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-900">
                      {celebrant.age}
                    </div>
                    {/* <div className="text-sm leading-5 text-gray-500">Web dev</div> */}
                  </td>
                </tr>
              )})}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
}
