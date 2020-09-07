import styled from 'styled-components';
import { withTranslation } from '../../i18n';
import {
  green1,
} from '../../styles/colors';

const TagContainer = styled.h4`
background-color: ${green1};
font-family: 'Raleway', sans-serif;
padding: 5px;
color: white;
font-size: 0.9em;
text-align: center;
width: max-content;
margin-top: 10px;
`;

const TopicTag = ({ t, topicCode }) => (
  <>
    <TagContainer>{t(`topics:topics.${topicCode}`)}</TagContainer>
  </>
);

TopicTag.getInitialProps = async () => ({
  namespacesRequired: ['topics'],
});

export default withTranslation(['topics'])(TopicTag);
