import styled from 'styled-components';

import { PageWrapper } from '../components-shared/PageWrapper';
import { PageHeader } from '../components-shared/PageHeader';
import { PageHeaderTitle } from '../components-shared/PageHeaderTitle';
import { PageHeaderSubtitle } from '../components-shared/PageHeaderSubtitle';
import { PageHeaderHr } from '../components-shared/PageHeaderHr';
import PageFooter from '../components-shared/PageFooter';

const TableOfContentsPage = () => {
    return (
      <PageWrapper>
        <PageHeader>
          <div>
            <PageHeaderSubtitle>
              Table of
            </PageHeaderSubtitle>
            <PageHeaderTitle>
              Contents
            </PageHeaderTitle>
          </div>
          <PageHeaderHr>
            <hr />
          </PageHeaderHr>
        </PageHeader>
        <TableOfContents>
          <li>
            <TableOfContentsItem>
              About this assessment
            </TableOfContentsItem>
            <TableOfContentsPageNum>
              1
            </TableOfContentsPageNum>
          </li>
          <li>
            <TableOfContentsItem>
              <b>Your printable report</b>
            </TableOfContentsItem>
            <TableOfContentsPageNum>
              <b>2-3</b>
            </TableOfContentsPageNum>
          </li>
          <li>
            <TableOfContentsItem>
              An introduction to the five clusters
            </TableOfContentsItem>
            <TableOfContentsPageNum>
              4
            </TableOfContentsPageNum>
          </li>
          <li>
            <TableOfContentsItem>
              Growth Mindset
            </TableOfContentsItem>
            <TableOfContentsPageNum>
              5
            </TableOfContentsPageNum>
          </li>
          <TableOfContentsSublist>
            <li>Your growth mindset, 5</li>
            <li>Training and maintenance, 6-8</li>
            <li>Case study, 9</li>
            <li>Facts and figures, 10</li>
          </TableOfContentsSublist>
          <li>
            <TableOfContentsItem>
              Mental Skills
            </TableOfContentsItem>
            <TableOfContentsPageNum>
              11
            </TableOfContentsPageNum>
          </li>
          <TableOfContentsSublist>
            <li>Your mental skills, 11</li>
            <li>Training and maintenance, 12-13</li>
            <li>Case study, 14</li>
            <li>Facts and figures, 15</li>
          </TableOfContentsSublist>
          <li>
            <TableOfContentsItem>
              Team Support
            </TableOfContentsItem>
            <TableOfContentsPageNum>
              16
            </TableOfContentsPageNum>
          </li>
          <TableOfContentsSublist>
            <li>Your team support, 16</li>
            <li>Building a team, 17-18</li>
            <li>Case study, 19</li>
            <li>Facts and figures, 20</li>
          </TableOfContentsSublist>
          <li>
            <TableOfContentsItem>
              Health Habits
            </TableOfContentsItem>
            <TableOfContentsPageNum>
              21
            </TableOfContentsPageNum>
          </li>
          <TableOfContentsSublist>
            <li>Your health habits, 21</li>
            <li>Training and maintenance, 22-23</li>
            <li>Case study, 24</li>
            <li>Facts and figures, 25</li>
          </TableOfContentsSublist>
          <li>
            <TableOfContentsItem>
              Self-Reflection
            </TableOfContentsItem>
            <TableOfContentsPageNum>
              26
            </TableOfContentsPageNum>
          </li>
          <TableOfContentsSublist>
            <li>Your self-reflection results, 26</li>
            <li>Training and maintenance, 27-28</li>
            <li>Case study, 29</li>
            <li>Facts and figures, 30</li>
          </TableOfContentsSublist>
          <li>
            <TableOfContentsItem>
              Next Steps
            </TableOfContentsItem>
            <TableOfContentsPageNum>
              31
            </TableOfContentsPageNum>
          </li>
        </TableOfContents>
        <PageFooter pageNum={1} />
      </PageWrapper>
    )
  }
  
const BASE = 8;

const TableOfContents = styled.ul`
  > li {
    display: flex;

    &::after {
      order: 2;
      background-image: radial-gradient(circle, currentcolor 1px, transparent 1px);
      background-position: bottom;
      background-size: 1ex 2px;
      background-repeat: space no-repeat;
      content: "";
      flex-grow: 1;
      height: 1em;
    }
  }
`;

const TableOfContentsItem = styled.span`
  order: 1;
  font-size: 16px;
  font-weight: 300;
  margin-bottom: ${BASE}px;
  margin-right: ${BASE}px;
`;

const TableOfContentsPageNum = styled.span`
  order: 3;
  margin-left: ${BASE}px;
`;

const TableOfContentsSublist = styled.ul`
  list-style-type: none;
  font-size: 14px;
  font-weight: 200;
  margin-bottom: ${BASE}px;
`;

  export default TableOfContentsPage;