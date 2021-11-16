import React from 'react';
import styled from 'styled-components';

const AuthTemplateBlock = styled.div``;

const AuthFormTemplate = ({ children }) => {
  return <AuthTemplateBlock>{children}</AuthTemplateBlock>;
};

export default AuthFormTemplate;
