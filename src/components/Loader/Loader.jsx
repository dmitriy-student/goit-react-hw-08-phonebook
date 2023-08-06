import { Oval } from 'react-loader-spinner';

export function Loader(params) {
  return (
    <Oval
      height={40}
      width={40}
      color="grey"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#4fa94d"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
}
