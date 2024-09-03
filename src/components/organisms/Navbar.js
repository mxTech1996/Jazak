'use client';
import { useRouter } from 'next/navigation';
import { navData } from '@/data';
import { NavbarV2 } from 'ecommerce-mxtech';
import { useInformation } from '@/store/useInformation';

const Navbar = () => {
  const { dataSite } = useInformation();
  const router = useRouter();

  return (
    <NavbarV2
      linksProps={{
        variant: 'button',
        align: 'left',
      }}
      textColor='black'
      withLogo={true}
      imageProps={{
        src: dataSite.iconImage,
        className: 'w-36',
      }}
      styleTitle={{
        fontWeight: 'bold',
        fontSize: 16,
      }}
      links={navData}
      onClickProduct={(product) => {
        router.push(`/product/${product.id}`);
      }}
      buttonCartProps={{
        onClick: () => router.push('/my-cart'),
      }}
      buttonContactProps={{
        onClick: () => router.push('/more-information'),
      }}
      onRedirect={(path) => router.push(path)}
      onSearch={(value) => {}}
      stylesContentLink={{
        backgroundColor: '#5E6F6D',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />
  );
};

export default Navbar;
