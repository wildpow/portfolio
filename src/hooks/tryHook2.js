export const useMenu = menuRef => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(open => !open);
  };

  const focusListener = event => {};
};
