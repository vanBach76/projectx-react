import React from 'react'
import Navbar from './Navbar'
import CompanyProvider from './CompanyProvider'
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const COMPANY_LIST = gql`
  {
    userById(id: "0") {
    id
    name
    companies {
      currency,
      name,
      reportCards {
        period,
        year,
        comment,
        reportData {
          dataFieldName,
          dataFieldValue
        }
      }
    }
  }
  }
`;

function Home() {

    const { loading, error, data } = useQuery(COMPANY_LIST);
    if (loading) return <p>Loading...</p>;
    if (error) {
      console.log(error);
      return <p>Error :(</p>;
    }
    let companyList = data.userById.companies;

    return (
        <div>
            <Navbar />
            <CompanyProvider companyList={companyList} />
        </div>
    )
}

export default Home