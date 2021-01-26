export default function Month({ month, celebrants }) {
  console.log("celebrants", celebrants);
  return (
    <>
      <div className="flex flex-col mt-8">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
            <table className="min-w-full table-fixed">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xl leading-4 font-medium text-gray-500 uppercase tracking-wider w-20">
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
                {celebrants?.map((celebrant) => {
                  // console.log(`${celebrant.imageUrl}?rect=${`${celebrant?.image?.hotspot?.x},${celebrant?.image?.hotspot?.y},${celebrant?.image?.hotspot?.width},${celebrant?.image?.hotspot?.height}`}`)
                  return (
                    <tr>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="flex items-center justify-around">
                          <div>
                            <p className="ordinal text-2xl">{celebrant.day}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            // src={`"${celebrant.imageUrl}?rect=${`${celebrant?.image?.hotspot?.x},${celebrant?.image?.hotspot?.y},${celebrant?.image?.hotspot?.width},${celebrant?.image?.hotspot?.height}`}"`}
                            src={celebrant.imageUrl}
                            alt=""
                          />
                        </div>
                      </td>
                      <td>
                          <div className="text-xl leading-5 font-medium text-gray-900">
                            {celebrant.celebrant}
                          </div>
                      </td>

                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="text-sm leading-5 text-gray-900">
                          {celebrant.age}
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
