//69SprintDD
import dynamic from 'next/dynamic';

const Dropdown = dynamic(
  async () => {
    const module = await import('reactjs-dropdown-component');
    const DD = module.Dropdown;

    return ({ forwardedRef, ...props }) => <DD ref={forwardedRef} {...props} />;
  },
  { ssr: false },
);

const DropdownMultiple = dynamic(
  async () => {
    const module = await import('reactjs-dropdown-component');
    const DDM = module.DropdownMultiple;

    return ({ forwardedRef, ...props }) => <DDM ref={forwardedRef} {...props} />;
  },
  { ssr: false },
);

const locations = [
    {
      label: 'XRP',
      value: 'xrp',
    },
    {
      label: 'LUNA',
      value: 'luna',
    },
    {
      label: 'Solana',
      value: 'solana',
    }
    {
        label: 'ADA',
        value: 'ada',
      } {
        label: 'UST',
        value: 'ust',
      } {
        label: 'DOT',
        value: 'polkadot',
      } {
        label: 'DOGE',
        value: 'doge',
      } {
        label: 'BUSD',
        value: 'busd',
      }
  ];

  onChange = (item, name) => {
    ...
  }


  


this.dropdownRef.current.selectSingleItem({ value: 'oslo' });
this.dropdownRef.current.clearSelection();