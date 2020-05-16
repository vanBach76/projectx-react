Home - container for all other components
Navbar - top of the screen, navigates between functionality
CompanyProvider - Sends request for companies to the backend and maintains state of the currently selected company
    SideBar - to the left of the screen, displays the available list of companies
            CompanyButton - one in each list-item of the CompanyList, when clicked should tell the ContentPanel what company to display data for. 
    ContentPanel - main part of the screen, displays data for the company selected in the CompanyList using the panel selected in the Nabvar.
        ReportPanel - displays ReportCards for the company currently set in the ContentPanel
            ReportCard - displays report data for the period and company provided by the CardPanel

State should be held in the ContentPanel as a selected company. The CompanyButton should be able to update this state. When the selected company is changed a new panel should be rendered.