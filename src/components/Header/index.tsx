import React , {useContext} from "react";
import { Container } from "./styles";
import Switch from "react-switch";
import {ThemeContext} from 'styled-components'
import {shade} from 'polished'

interface Props {
    toogleTheme(): void;
}
const Header: React.FC<Props> = ({toogleTheme}) => {
    const {colors, title} = useContext(ThemeContext)
  return (
    <Container>
      Hello
      <Switch
        onChange={toogleTheme}
        checked={title=== 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.1, colors.primary)}
        onColor={colors.secundary}
        offHandleColor={shade(0.1, colors.switch)}
      />
    </Container>
  );
};

export default Header;
