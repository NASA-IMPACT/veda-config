import React from '$veda-ui/react';
import styled from '$veda-ui/styled-components';
import { glsp, themeVal } from '$veda-ui/@devseed-ui/theme-provider';
import { Link } from '$veda-ui/react-router-dom';

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: ${glsp()};

  .icon {
    font-size: 2rem;
  }

  a {
    display: grid;
    align-items: center;

    &,
    &:visited {
      color: inherit;
      text-decoration: none;
    }

    span {
      font-size: 1.25rem;
      line-height: 1.5rem;
      font-weight: ${themeVal('type.base.regular')};
      letter-spacing: -0.025em;
    }
  }
`;

export default function HeaderComponent() {
  return (
    <Brand>
      <Link to='/'>
        <span>GHG Center</span>
      </Link>
    </Brand>
  );
}
