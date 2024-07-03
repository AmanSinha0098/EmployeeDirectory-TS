export type EmployeeData = {
    img: string,
    name: string,
    email: string,
    location: string,
    dept: string,
    role: string,
    empNo: string,
    status: string,
    roleId?: string,
    mobile: string,
    joinDate: string
};

// export type EmployeeData = {
//     id: string;
//     name: string;
//     email: string;
//     joiningDate: string;
//     department: {
//         id: string;
//         name: string;
//     };
//     role: string;
//     roleID: string;
//     location: {
//         id: string;
//         name: string;
//     };
//     mobileNo: string;
//     dob: string;
//     manager: string;
//     project: {
//         id: string;
//         name: string;
//     };
// };


export type Role =
    {
        roleId:string
        role: string,
        location: string,
        dept: string
    };

