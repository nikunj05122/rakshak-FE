// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import {
//   File,
//   Home,
//   LineChart,
//   ListFilter,
//   MoreHorizontal,
//   Package,
//   Package2,
//   PanelLeft,
//   PlusCircle,
//   Search,
//   Settings,
//   ShoppingCart,
//   Users2,
// } from "lucide-react";

// import { Badge } from "@/components/ui/badge";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   DropdownMenu,
//   DropdownMenuCheckboxItem,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Input } from "@/components/ui/input";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import PaginationPage from "@/components/commonComponents/Pagination/page";
// import { useState } from "react";
// import CardWithForm from "@/components/commonComponents/Dialog/page";

// export default function Users() {
//   const [isAddUserModalOpen, setIsAddUserModalOpen] = useState<boolean>(false);

//   return (
//     <div className="flex min-h-screen w-full flex-col bg-muted/40">
//       <div className="flex flex-col sm:gap-4">
//         <main
//           className={`grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 ${
//             isAddUserModalOpen ? "blur-sm" : ""
//           }`}
//         >
//           <Tabs defaultValue="all">
//             <div className="flex items-center">
//               <TabsList>
//                 <TabsTrigger value="all">All</TabsTrigger>
//                 <TabsTrigger value="active">Active</TabsTrigger>
//                 <TabsTrigger value="draft">Draft</TabsTrigger>
//                 <TabsTrigger value="archived" className="hidden sm:flex">
//                   Archived
//                 </TabsTrigger>
//               </TabsList>

//               <div className="ml-auto flex items-center gap-2">
//                 <div className="relative ml-auto flex-1 md:grow-0">
//                   <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//                   <Input
//                     type="search"
//                     placeholder="Search..."
//                     className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
//                   />
//                 </div>

//                 <DropdownMenu>
//                   <DropdownMenuTrigger asChild>
//                     <Button variant="outline" size="sm" className="h-10 gap-1">
//                       <ListFilter className="h-3.5 w-3.5" />
//                       <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
//                         Filter
//                       </span>
//                     </Button>
//                   </DropdownMenuTrigger>
//                   <DropdownMenuContent align="end">
//                     <DropdownMenuLabel>Filter by</DropdownMenuLabel>
//                     <DropdownMenuSeparator />
//                     <DropdownMenuCheckboxItem checked>
//                       Active
//                     </DropdownMenuCheckboxItem>
//                     <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
//                     <DropdownMenuCheckboxItem>
//                       Archived
//                     </DropdownMenuCheckboxItem>
//                   </DropdownMenuContent>
//                 </DropdownMenu>
//                 <Button
//                   size="sm"
//                   variant="outline"
//                   className="h-10 gap-1"
//                   onClick={() => {
//                     setIsAddUserModalOpen(true);
//                   }}
//                 >
//                   <PlusCircle className="h-3.5 w-3.5" />
//                   <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
//                     Add User
//                   </span>
//                 </Button>
//               </div>
//             </div>
//             <TabsContent value="all">
//               <Card x-chunk="dashboard-06-chunk-0">
//                 <CardHeader>
//                   <CardTitle>Users</CardTitle>
//                   <CardDescription>
//                     Manage your products and view their sales performance.
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <Table>
//                     <TableHeader>
//                       <TableRow>
//                         <TableHead className="hidden w-[100px] sm:table-cell">
//                           {/* <span className="sr-only">Image</span> */}
//                           Profile
//                         </TableHead>
//                         <TableHead>Name</TableHead>
//                         <TableHead>Email</TableHead>
//                         <TableHead className="hidden md:table-cell">
//                           Mobile Number
//                         </TableHead>
//                         <TableHead>Designation</TableHead>
//                         <TableHead>Type</TableHead>
//                         <TableHead className="hidden md:table-cell">
//                           Created at
//                         </TableHead>
//                         <TableHead>
//                           <span className="sr-only">Actions</span>
//                         </TableHead>
//                       </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                       <TableRow>
//                         <TableCell className="hidden sm:table-cell">
//                           <Image
//                             alt="Product image"
//                             className="aspect-square rounded-md object-cover"
//                             height="64"
//                             src="/placeholder.svg"
//                             width="64"
//                           />
//                         </TableCell>
//                         <TableCell className="font-medium">
//                           Laser Lemonade Machine
//                         </TableCell>
//                         <TableCell className="font-medium">
//                           fireofficer@gmail.com
//                         </TableCell>
//                         <TableCell className="hidden md:table-cell">
//                           999-888-7777
//                         </TableCell>
//                         <TableCell className="font-medium">
//                           Fire Officer
//                         </TableCell>
//                         <TableCell>
//                           <Badge variant="outline">user</Badge>
//                         </TableCell>
//                         <TableCell className="hidden md:table-cell">
//                           2024-08-12 10:42 AM
//                         </TableCell>
//                         <TableCell>
//                           <DropdownMenu>
//                             <DropdownMenuTrigger asChild>
//                               <Button
//                                 aria-haspopup="true"
//                                 size="icon"
//                                 variant="ghost"
//                               >
//                                 <MoreHorizontal className="h-4 w-4" />
//                                 <span className="sr-only">Toggle menu</span>
//                               </Button>
//                             </DropdownMenuTrigger>
//                             <DropdownMenuContent align="end">
//                               <DropdownMenuLabel>Actions</DropdownMenuLabel>
//                               <DropdownMenuItem>Edit</DropdownMenuItem>
//                               <DropdownMenuItem>Delete</DropdownMenuItem>
//                             </DropdownMenuContent>
//                           </DropdownMenu>
//                         </TableCell>
//                       </TableRow>
//                       <TableRow>
//                         <TableCell className="hidden sm:table-cell">
//                           <Image
//                             alt="Product image"
//                             className="aspect-square rounded-md object-cover"
//                             height="64"
//                             src="/placeholder.svg"
//                             width="64"
//                           />
//                         </TableCell>
//                         <TableCell className="font-medium">
//                           Laser Lemonade Machine
//                         </TableCell>
//                         <TableCell className="font-medium">
//                           fireofficer@gmail.com
//                         </TableCell>
//                         <TableCell className="hidden md:table-cell">
//                           999-888-7777
//                         </TableCell>
//                         <TableCell className="font-medium">
//                           Fire Officer
//                         </TableCell>
//                         <TableCell>
//                           <Badge variant="secondary">user</Badge>
//                         </TableCell>
//                         <TableCell className="hidden md:table-cell">
//                           2024-08-12 10:42 AM
//                         </TableCell>
//                         <TableCell>
//                           <DropdownMenu>
//                             <DropdownMenuTrigger asChild>
//                               <Button
//                                 aria-haspopup="true"
//                                 size="icon"
//                                 variant="ghost"
//                               >
//                                 <MoreHorizontal className="h-4 w-4" />
//                                 <span className="sr-only">Toggle menu</span>
//                               </Button>
//                             </DropdownMenuTrigger>
//                             <DropdownMenuContent align="end">
//                               <DropdownMenuLabel>Actions</DropdownMenuLabel>
//                               <DropdownMenuItem>Edit</DropdownMenuItem>
//                               <DropdownMenuItem>Delete</DropdownMenuItem>
//                             </DropdownMenuContent>
//                           </DropdownMenu>
//                         </TableCell>
//                       </TableRow>
//                       <TableRow>
//                         <TableCell className="hidden sm:table-cell">
//                           <Image
//                             alt="Product image"
//                             className="aspect-square rounded-md object-cover"
//                             height="64"
//                             src="/placeholder.svg"
//                             width="64"
//                           />
//                         </TableCell>
//                         <TableCell className="font-medium">
//                           Laser Lemonade Machine
//                         </TableCell>
//                         <TableCell className="font-medium">
//                           fireofficer@gmail.com
//                         </TableCell>
//                         <TableCell className="hidden md:table-cell">
//                           999-888-7777
//                         </TableCell>
//                         <TableCell className="font-medium">
//                           Fire Officer
//                         </TableCell>
//                         <TableCell>
//                           <Badge variant="destructive">user</Badge>
//                         </TableCell>
//                         <TableCell className="hidden md:table-cell">
//                           2024-08-12 10:42 AM
//                         </TableCell>
//                         <TableCell>
//                           <DropdownMenu>
//                             <DropdownMenuTrigger asChild>
//                               <Button
//                                 aria-haspopup="true"
//                                 size="icon"
//                                 variant="ghost"
//                               >
//                                 <MoreHorizontal className="h-4 w-4" />
//                                 <span className="sr-only">Toggle menu</span>
//                               </Button>
//                             </DropdownMenuTrigger>
//                             <DropdownMenuContent align="end">
//                               <DropdownMenuLabel>Actions</DropdownMenuLabel>
//                               <DropdownMenuItem>Edit</DropdownMenuItem>
//                               <DropdownMenuItem>Delete</DropdownMenuItem>
//                             </DropdownMenuContent>
//                           </DropdownMenu>
//                         </TableCell>
//                       </TableRow>
//                     </TableBody>
//                   </Table>
//                 </CardContent>
//                 <PaginationPage />
//               </Card>
//             </TabsContent>
//           </Tabs>
//         </main>
//       </div>

//       {isAddUserModalOpen && (
//         <CardWithForm onClose={() => setIsAddUserModalOpen(false)} />
//       )}
//     </div>
//   );
// }

import Image from 'next/image';
import {
    File,
    LineChart,
    ListFilter,
    MoreHorizontal,
    Package,
    PlusCircle,
    Search,
    ShoppingCart,
    Users2,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';

export default function Users() {
    return (
        <main className="grid flex-1 items-start gap-4 sm:py-0 md:gap-8">
            <Tabs defaultValue="all">
                <div className="flex items-center">
                    <TabsList className="h-8">
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="active">Active</TabsTrigger>
                        <TabsTrigger value="draft">Draft</TabsTrigger>
                        <TabsTrigger
                            value="archived"
                            className="hidden sm:flex"
                        >
                            Archived
                        </TabsTrigger>
                    </TabsList>
                    <div className="ml-auto flex items-center gap-2">
                        <div className="relative ml-4 flex-1 md:grow-0">
                            <Search className="absolute left-[0.650rem] top-[0.500rem] h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search..."
                                className="w-full rounded-lg bg-background pl-8 md:w-[200px] h-8"
                            />
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="h-8 gap-1"
                                >
                                    <ListFilter className="h-3.5 w-3.5" />
                                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                        Filter
                                    </span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Active</DropdownMenuItem>
                                <DropdownMenuItem>Draft</DropdownMenuItem>
                                <DropdownMenuItem>Archived</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button size="sm" className="h-8 gap-1">
                            <PlusCircle className="h-3.5 w-3.5" />
                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                Add User
                            </span>
                        </Button>
                    </div>
                </div>
                <TabsContent value="all">
                    <Card>
                        <CardHeader>
                            <CardTitle>Users</CardTitle>
                            <CardDescription>
                                Manage your products and view their sales
                                performance.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="hidden w-[100px] sm:table-cell">
                                            <span className="sr-only">
                                                Image
                                            </span>
                                            Profile
                                        </TableHead>
                                        <TableHead>Name</TableHead>
                                        <TableHead className="hidden md:table-cell">
                                            Email
                                        </TableHead>
                                        <TableHead className="hidden md:table-cell">
                                            Mobile Number
                                        </TableHead>
                                        <TableHead className="hidden md:table-cell">
                                            Designation
                                        </TableHead>
                                        <TableHead>Type</TableHead>
                                        <TableHead className="hidden md:table-cell">
                                            Created at
                                        </TableHead>
                                        <TableHead>
                                            <span className="sr-only">
                                                Actions
                                            </span>
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="hidden sm:table-cell">
                                            <Image
                                                alt="Product image"
                                                className="aspect-square rounded-md object-cover"
                                                height="64"
                                                src="/placeholder.svg"
                                                width="64"
                                            />
                                        </TableCell>
                                        <TableCell className="font-medium">
                                            Test User
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell">
                                            testuser123@gmail.com
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell">
                                            999888777
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell">
                                            Fire Officer
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="outline">
                                                User
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell">
                                            2023-07-12 10:42 AM
                                        </TableCell>
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button
                                                        aria-haspopup="true"
                                                        size="icon"
                                                        variant="ghost"
                                                    >
                                                        <MoreHorizontal className="h-4 w-4" />
                                                        <span className="sr-only">
                                                            Toggle menu
                                                        </span>
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuLabel>
                                                        Actions
                                                    </DropdownMenuLabel>
                                                    <DropdownMenuItem>
                                                        Edit
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        Delete
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="hidden sm:table-cell">
                                            <Image
                                                alt="Product image"
                                                className="aspect-square rounded-md object-cover"
                                                height="64"
                                                src="/placeholder.svg"
                                                width="64"
                                            />
                                        </TableCell>
                                        <TableCell className="font-medium">
                                            Test User
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell">
                                            testuser123@gmail.com
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell">
                                            999888777
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell">
                                            Fire Officer
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="secondary">
                                                User
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell">
                                            2023-07-12 10:42 AM
                                        </TableCell>
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button
                                                        aria-haspopup="true"
                                                        size="icon"
                                                        variant="ghost"
                                                    >
                                                        <MoreHorizontal className="h-4 w-4" />
                                                        <span className="sr-only">
                                                            Toggle menu
                                                        </span>
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuLabel>
                                                        Actions
                                                    </DropdownMenuLabel>
                                                    <DropdownMenuItem>
                                                        Edit
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        Delete
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="hidden sm:table-cell">
                                            <Image
                                                alt="Product image"
                                                className="aspect-square rounded-md object-cover"
                                                height="64"
                                                src="/placeholder.svg"
                                                width="64"
                                            />
                                        </TableCell>
                                        <TableCell className="font-medium">
                                            Test User
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell">
                                            testuser123@gmail.com
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell">
                                            999888777
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell">
                                            Fire Officer
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="destructive">
                                                User
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell">
                                            2023-07-12 10:42 AM
                                        </TableCell>
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button
                                                        aria-haspopup="true"
                                                        size="icon"
                                                        variant="ghost"
                                                    >
                                                        <MoreHorizontal className="h-4 w-4" />
                                                        <span className="sr-only">
                                                            Toggle menu
                                                        </span>
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuLabel>
                                                        Actions
                                                    </DropdownMenuLabel>
                                                    <DropdownMenuItem>
                                                        Edit
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        Delete
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </main>
    );
}
