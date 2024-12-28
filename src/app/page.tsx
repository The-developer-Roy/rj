"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

import Tabs from "@/components/Tabs";

import useProductStore from "@/store/productState";


const playFair = Playfair_Display({ subsets: ["latin"], weight: "400" });

function Page() {
    const images = [
        "/rj.mp41.mp4",
        "rj.mp42.mp4",
        "rj.mp4 3.mp4",
    ];


    const tabsdata = [
        {
            title: "NEW ARRIVALS",
            content: [
                "/product1.png",
                "/product2.png",
                "/product3.png",
                "/product2.png",
                "/product1.png"
            ]
        },
        {
            title: "MOST LOVED",
            content: [
                "/product2.png",
                "/product1.png",
                "/product3.png",
                "/product1.png",
                "/product3.png"
            ]
        }
    ]

    const { fetchProducts} = useProductStore();

    useEffect(() => {
        fetchProducts();
    }, []);




    return (
        <main className="relative w-full">
            {/* Image Slider Section */}
            <section className="relative w-full h-screen overflow-hidden">
                <div className="flex animate-slide">
                    {[...images, ...images].map((src, index) => (
                        <div
                            key={index}
                            className="w-screen h-screen flex-shrink-0 relative"
                        >
                            <video
                                src={src}
                                autoPlay={true}
                                muted={true}
                                playsInline={true}
                                loop={true}
                                className="object-fill"
                            ></video>
                        </div>
                    ))}
                </div>
            </section>

            {/* Shop By Category Section */}
            <section className="shop_by_category text-2xl text-[#832729] py-8 text-center font-bold">
                <span className={`${playFair.className}`}>SHOP BY CATEGORY</span>
                <div className="w-full flex justify-center items-center overflow-hidden mt-6 mb-6">
                    <svg width="1204" height="19" viewBox="0 0 1204 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 9.55804H553.293" stroke="#832729" />
                        <path d="M649.899 9.55792H1203.19" stroke="#832729" />
                        <path d="M635.775 2.55987C631.822 2.55987 627.87 3.60557 624.357 5.5361C623.04 6.17961 621.796 6.984 620.552 7.70795C619.966 8.0297 619.6 8.75365 619.673 9.4776C619.747 11.2473 619.015 12.9365 617.697 14.0626C616.014 15.7518 613.818 16.6367 611.55 16.5562C610.598 16.4758 609.72 16.2345 608.842 15.8323C608.476 15.6714 608.037 15.591 607.671 15.7518C605.256 16.878 602.694 17.6824 600.059 18.0846C596.4 18.5672 592.814 18.4867 589.374 16.7975C587.91 16.154 586.666 15.1083 585.642 13.7409C585.202 13.1778 584.983 13.0974 584.397 13.4995C581.397 15.5105 578.03 16.9584 574.59 17.6824C570.565 18.4867 566.54 18.7281 562.661 16.9584C559.807 15.6714 557.684 13.6604 556.733 10.3624C556.22 8.67321 555.928 6.90356 556.659 5.21434C557.465 3.28381 558.855 1.83591 560.685 1.11196C564.051 -0.416373 567.418 -0.496814 570.638 1.67503C571.809 2.55986 572.761 3.76644 573.346 5.21434C573.419 5.37522 573.419 5.5361 573.273 5.69697C573.273 5.69697 573.2 5.69698 573.2 5.77742C573.053 5.9383 572.834 5.9383 572.687 5.77742C572.614 5.69698 572.541 5.61654 572.541 5.5361C571.516 3.20337 569.54 1.51416 567.198 1.1924C564.417 0.548892 561.563 1.27284 559.294 3.20337C556.952 4.97303 556.367 8.59278 557.977 11.1668C558.123 11.4081 558.343 11.6495 558.562 11.8908C560.026 13.7409 562.075 14.867 564.271 15.2692C567.711 15.7518 571.151 15.5105 574.444 14.3844C577.298 13.4995 580.006 12.1321 582.494 10.4429C583.446 9.79936 583.592 9.39717 583.373 8.19058C582.568 3.92733 585.056 0.87065 588.349 0.227139C590.691 -0.255494 593.033 0.307574 595.009 1.67503C595.668 2.15767 596.546 2.31855 597.278 1.91635C600.572 0.548893 604.085 -0.0141786 607.598 0.307577C610.598 0.548893 613.453 1.1924 616.014 3.12294C616.526 3.52513 617.039 4.00776 617.551 4.49039C617.917 4.97303 618.502 5.05347 618.942 4.65127C620.698 3.60557 622.454 2.72074 624.284 1.99679C628.236 0.388014 632.554 -0.094615 636.726 0.548896C639.507 0.870651 642.069 2.07723 644.264 4.00776C645.947 5.37522 646.899 7.62751 646.899 9.8798C646.826 11.3277 646.24 12.6952 645.289 13.7409C643.971 15.3496 642.142 16.3149 640.166 16.6367C638.409 16.878 636.653 16.4758 635.189 15.591C634.896 15.4301 634.896 15.1888 635.043 14.867C635.189 14.6257 635.409 14.5452 635.628 14.7061C636.872 15.6714 638.482 16.0736 639.946 15.7518C641.703 15.5105 643.386 14.6257 644.703 13.2582C646.606 11.2473 646.606 7.94927 644.776 5.85786C644.63 5.69698 644.411 5.45566 644.191 5.29478C642.581 4.00776 640.678 3.20338 638.702 2.96206C637.824 2.6403 636.799 2.55987 635.775 2.55987ZM586.373 12.4538C587.325 13.58 588.569 14.3039 589.886 14.7866C592.155 15.4301 594.497 15.6714 596.766 15.3496C599.474 15.0279 602.109 14.3039 604.597 13.1778C605.109 12.9365 605.109 12.9365 604.743 12.5343C604.158 11.8908 603.645 11.2473 603.06 10.6037C601.596 8.91453 600.206 7.22532 598.669 5.77742C598.303 5.37522 597.717 5.29478 597.205 5.61654C593.472 7.46663 589.96 10.1211 586.373 12.4538ZM599.035 4.81215C601.23 6.984 603.206 9.31672 605.182 11.6494C605.914 12.4538 606.061 12.5343 607.012 11.9712C610.305 10.1211 613.526 7.94926 616.673 5.93829C617.331 5.5361 617.331 5.5361 616.673 4.97303C615.282 3.92733 613.672 3.20338 611.989 2.96206C609.061 2.47943 606.134 2.55986 603.28 3.20337C601.816 3.44469 600.352 4.00776 599.035 4.81215ZM595.083 2.72074C595.009 2.6403 595.009 2.6403 595.009 2.6403C593.107 1.1924 590.691 0.548894 588.423 1.03153C585.641 1.43372 583.665 4.32952 584.031 7.3862C584.031 7.62751 584.105 7.86882 584.178 8.11014C584.397 9.15584 584.471 9.15585 585.276 8.59278C587.91 6.90356 590.545 5.1339 593.326 3.686C593.912 3.36425 594.497 3.0425 595.083 2.72074ZM609.208 15.1083C609.5 15.2692 609.72 15.3496 609.866 15.4301C612.794 16.2345 615.868 15.1888 617.844 12.6952C618.649 11.6495 619.015 10.3624 618.942 8.99497C615.721 11.0059 612.647 13.1778 609.208 15.1083Z" fill="#84292B" />
                    </svg>
                </div>
                <div className={`category-content w-full flex justify-center items-center ${playFair.className} font-bold text-md grid grid-cols-3 grid-rows-2 gap-6`}>
                    <Link href={"#"} >
                        <div className="flex justify-center items-center flex-col">
                            <Image
                                src={"/category1.webp"}
                                width={200}
                                height={200}
                                alt="category1"
                                className="rounded-2xl"
                            />
                            <span className="text-[#832729] text-center">SAREES</span>
                        </div>
                    </Link>
                    <Link href={"#"} >
                        <div className="flex justify-center items-center flex-col">
                            <Image
                                src={"/category2.webp"}
                                width={200}
                                height={200}
                                alt="category1"
                                className="rounded-2xl"
                            />
                            <span className="text-[#832729] text-center">SAREES</span>
                        </div>
                    </Link>
                    <Link href={"#"} >
                        <div className="flex justify-center items-center flex-col">
                            <Image
                                src={"/category3.jpg"}
                                width={200}
                                height={200}
                                alt="category1"
                                className="rounded-2xl"
                            />
                            <span className="text-[#832729] text-center">SAREES</span>
                        </div>
                    </Link>
                    <Link href={"#"} >
                        <div className="flex justify-center items-center flex-col">
                            <Image
                                src={"/category3.jpg"}
                                width={200}
                                height={200}
                                alt="category1"
                                className="rounded-2xl"
                            />
                            <span className="text-[#832729] text-center">SAREES</span>
                        </div>
                    </Link>
                    <Link href={"#"} >
                        <div className="flex justify-center items-center flex-col">
                            <Image
                                src={"/category4.jpg"}
                                width={200}
                                height={200}
                                alt="category1"
                                className="rounded-2xl"
                            />
                            <span className="text-[#832729] text-center">SAREES</span>
                        </div>
                    </Link>
                    <Link href={"#"} >
                        <div className="flex justify-center items-center flex-col">
                            <Image
                                src={"/category5.webp"}
                                width={200}
                                height={200}
                                alt="category1"
                                className="rounded-2xl"
                            />
                            <span className="text-[#832729] text-center">SAREES</span>
                        </div>
                    </Link>
                </div>
            </section>
            <section className="h-screen w-full mt-10">
                <div className={`${playFair.className} text-[#832729] font-extrabold flex justify-center items-center text-2xl w-[100%] h-[100%]`}>
                    <Tabs tabs={tabsdata} />
                </div>
            </section>
            <section className="">
                <div className="w-full">
                    <Link href="#">
                        <video src="/rj.mp4 65.mp4" autoPlay={true} muted={true} playsInline={true} loop={true}></video>
                    </Link>
                </div>
            </section>
            <section className="shop_by_category text-2xl text-[#832729] py-8 text-center font-bold">
                <span className={`${playFair.className}`}>SHOP BY CHOICE</span>
                <div className="w-full flex justify-center items-center overflow-hidden mt-6 mb-6">
                    <svg width="1204" height="19" viewBox="0 0 1204 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 9.55804H553.293" stroke="#832729" />
                        <path d="M649.899 9.55792H1203.19" stroke="#832729" />
                        <path d="M635.775 2.55987C631.822 2.55987 627.87 3.60557 624.357 5.5361C623.04 6.17961 621.796 6.984 620.552 7.70795C619.966 8.0297 619.6 8.75365 619.673 9.4776C619.747 11.2473 619.015 12.9365 617.697 14.0626C616.014 15.7518 613.818 16.6367 611.55 16.5562C610.598 16.4758 609.72 16.2345 608.842 15.8323C608.476 15.6714 608.037 15.591 607.671 15.7518C605.256 16.878 602.694 17.6824 600.059 18.0846C596.4 18.5672 592.814 18.4867 589.374 16.7975C587.91 16.154 586.666 15.1083 585.642 13.7409C585.202 13.1778 584.983 13.0974 584.397 13.4995C581.397 15.5105 578.03 16.9584 574.59 17.6824C570.565 18.4867 566.54 18.7281 562.661 16.9584C559.807 15.6714 557.684 13.6604 556.733 10.3624C556.22 8.67321 555.928 6.90356 556.659 5.21434C557.465 3.28381 558.855 1.83591 560.685 1.11196C564.051 -0.416373 567.418 -0.496814 570.638 1.67503C571.809 2.55986 572.761 3.76644 573.346 5.21434C573.419 5.37522 573.419 5.5361 573.273 5.69697C573.273 5.69697 573.2 5.69698 573.2 5.77742C573.053 5.9383 572.834 5.9383 572.687 5.77742C572.614 5.69698 572.541 5.61654 572.541 5.5361C571.516 3.20337 569.54 1.51416 567.198 1.1924C564.417 0.548892 561.563 1.27284 559.294 3.20337C556.952 4.97303 556.367 8.59278 557.977 11.1668C558.123 11.4081 558.343 11.6495 558.562 11.8908C560.026 13.7409 562.075 14.867 564.271 15.2692C567.711 15.7518 571.151 15.5105 574.444 14.3844C577.298 13.4995 580.006 12.1321 582.494 10.4429C583.446 9.79936 583.592 9.39717 583.373 8.19058C582.568 3.92733 585.056 0.87065 588.349 0.227139C590.691 -0.255494 593.033 0.307574 595.009 1.67503C595.668 2.15767 596.546 2.31855 597.278 1.91635C600.572 0.548893 604.085 -0.0141786 607.598 0.307577C610.598 0.548893 613.453 1.1924 616.014 3.12294C616.526 3.52513 617.039 4.00776 617.551 4.49039C617.917 4.97303 618.502 5.05347 618.942 4.65127C620.698 3.60557 622.454 2.72074 624.284 1.99679C628.236 0.388014 632.554 -0.094615 636.726 0.548896C639.507 0.870651 642.069 2.07723 644.264 4.00776C645.947 5.37522 646.899 7.62751 646.899 9.8798C646.826 11.3277 646.24 12.6952 645.289 13.7409C643.971 15.3496 642.142 16.3149 640.166 16.6367C638.409 16.878 636.653 16.4758 635.189 15.591C634.896 15.4301 634.896 15.1888 635.043 14.867C635.189 14.6257 635.409 14.5452 635.628 14.7061C636.872 15.6714 638.482 16.0736 639.946 15.7518C641.703 15.5105 643.386 14.6257 644.703 13.2582C646.606 11.2473 646.606 7.94927 644.776 5.85786C644.63 5.69698 644.411 5.45566 644.191 5.29478C642.581 4.00776 640.678 3.20338 638.702 2.96206C637.824 2.6403 636.799 2.55987 635.775 2.55987ZM586.373 12.4538C587.325 13.58 588.569 14.3039 589.886 14.7866C592.155 15.4301 594.497 15.6714 596.766 15.3496C599.474 15.0279 602.109 14.3039 604.597 13.1778C605.109 12.9365 605.109 12.9365 604.743 12.5343C604.158 11.8908 603.645 11.2473 603.06 10.6037C601.596 8.91453 600.206 7.22532 598.669 5.77742C598.303 5.37522 597.717 5.29478 597.205 5.61654C593.472 7.46663 589.96 10.1211 586.373 12.4538ZM599.035 4.81215C601.23 6.984 603.206 9.31672 605.182 11.6494C605.914 12.4538 606.061 12.5343 607.012 11.9712C610.305 10.1211 613.526 7.94926 616.673 5.93829C617.331 5.5361 617.331 5.5361 616.673 4.97303C615.282 3.92733 613.672 3.20338 611.989 2.96206C609.061 2.47943 606.134 2.55986 603.28 3.20337C601.816 3.44469 600.352 4.00776 599.035 4.81215ZM595.083 2.72074C595.009 2.6403 595.009 2.6403 595.009 2.6403C593.107 1.1924 590.691 0.548894 588.423 1.03153C585.641 1.43372 583.665 4.32952 584.031 7.3862C584.031 7.62751 584.105 7.86882 584.178 8.11014C584.397 9.15584 584.471 9.15585 585.276 8.59278C587.91 6.90356 590.545 5.1339 593.326 3.686C593.912 3.36425 594.497 3.0425 595.083 2.72074ZM609.208 15.1083C609.5 15.2692 609.72 15.3496 609.866 15.4301C612.794 16.2345 615.868 15.1888 617.844 12.6952C618.649 11.6495 619.015 10.3624 618.942 8.99497C615.721 11.0059 612.647 13.1778 609.208 15.1083Z" fill="#84292B" />
                    </svg>
                </div>
                <div className={`category-content w-full flex justify-center items-center ${playFair.className} font-bold text-md grid grid-cols-3 grid-rows-2 gap-6`}>
                    <Link href={"#"} >
                        <div className="flex justify-center items-center flex-col">
                            <Image
                                src={"/category1.webp"}
                                width={200}
                                height={200}
                                alt="category1"
                            />
                        </div>
                    </Link>
                    <Link href={"#"} >
                        <div className="flex justify-center items-center flex-col">
                            <Image
                                src={"/category2.webp"}
                                width={200}
                                height={200}
                                alt="category1"
                            />
                        </div>
                    </Link>
                    <Link href={"#"} >
                        <div className="flex justify-center items-center flex-col">
                            <Image
                                src={"/category3.jpg"}
                                width={200}
                                height={200}
                                alt="category1"
                            />
                        </div>
                    </Link>
                    <Link href={"#"} >
                        <div className="flex justify-center items-center flex-col">
                            <Image
                                src={"/category3.jpg"}
                                width={200}
                                height={200}
                                alt="category1"
                            />
                        </div>
                    </Link>
                    <Link href={"#"} >
                        <div className="flex justify-center items-center flex-col">
                            <Image
                                src={"/category4.jpg"}
                                width={200}
                                height={200}
                                alt="category1"
                            />
                        </div>
                    </Link>
                    <Link href={"#"} >
                        <div className="flex justify-center items-center flex-col">
                            <Image
                                src={"/category5.webp"}
                                width={200}
                                height={200}
                                alt="category1"
                            />
                        </div>
                    </Link>
                </div>
            </section>
            <div className="w-full h-[20vh] bg-[#FFD8D8] flex justify-center items-center gap-20">
                <div className="flex flex-col justify-center items-center">
                    <svg width="57" height="41" viewBox="0 0 57 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M38 28.6667V2.125H2.375V28.6667H38ZM38 28.6667H54.625V18.4583L47.5 12.3333H38V28.6667ZM19 33.7708C19 36.5898 16.3417 38.875 13.0625 38.875C9.78331 38.875 7.125 36.5898 7.125 33.7708C7.125 30.9519 9.78331 28.6667 13.0625 28.6667C16.3417 28.6667 19 30.9519 19 33.7708ZM49.875 33.7708C49.875 36.5898 47.2167 38.875 43.9375 38.875C40.6583 38.875 38 36.5898 38 33.7708C38 30.9519 40.6583 28.6667 43.9375 28.6667C47.2167 28.6667 49.875 30.9519 49.875 33.7708Z" stroke="#531314" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[#832729] text-center">demon text</span>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <svg width="47" height="45" viewBox="0 0 47 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.625 42.9168V22.5002H30.375V42.9168M2.875 16.3752L23.5 2.0835L44.125 16.3752V38.8335C44.125 39.9165 43.6421 40.9551 42.7826 41.7208C41.923 42.4866 40.7572 42.9168 39.5417 42.9168H7.45833C6.24276 42.9168 5.07697 42.4866 4.21743 41.7208C3.35789 40.9551 2.875 39.9165 2.875 38.8335V16.3752Z" stroke="#531314" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[#832729] text-center">demon text</span>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <svg width="57" height="41" viewBox="0 0 57 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M38 28.6667V2.125H2.375V28.6667H38ZM38 28.6667H54.625V18.4583L47.5 12.3333H38V28.6667ZM19 33.7708C19 36.5898 16.3417 38.875 13.0625 38.875C9.78331 38.875 7.125 36.5898 7.125 33.7708C7.125 30.9519 9.78331 28.6667 13.0625 28.6667C16.3417 28.6667 19 30.9519 19 33.7708ZM49.875 33.7708C49.875 36.5898 47.2167 38.875 43.9375 38.875C40.6583 38.875 38 36.5898 38 33.7708C38 30.9519 40.6583 28.6667 43.9375 28.6667C47.2167 28.6667 49.875 30.9519 49.875 33.7708Z" stroke="#531314" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[#832729] text-center">demon text</span>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <svg width="47" height="45" viewBox="0 0 47 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.625 42.9168V22.5002H30.375V42.9168M2.875 16.3752L23.5 2.0835L44.125 16.3752V38.8335C44.125 39.9165 43.6421 40.9551 42.7826 41.7208C41.923 42.4866 40.7572 42.9168 39.5417 42.9168H7.45833C6.24276 42.9168 5.07697 42.4866 4.21743 41.7208C3.35789 40.9551 2.875 39.9165 2.875 38.8335V16.3752Z" stroke="#531314" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[#832729] text-center">demon text</span>
                </div>
            </div>
            <footer className="bg-[#A0214D] h-[40vh] mt-10 flex justify-center items-end">
                <div className="w-full flex justify-center items-center overflow-hidden mt-6 mb-6">
                    <svg width="1329" height="28" viewBox="0 0 1329 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 14.2363H610.891" stroke="#F6E9E9" />
                        <path d="M717.555 14.2363H1328.45" stroke="#F6E9E9" />
                        <path d="M681.622 20.6182L681.609 20.633L681.598 20.6487C679.816 23.0607 677.545 24.2646 675.253 24.1612C674.291 24.049 673.396 23.7189 672.485 23.1562L672.485 23.1561L672.478 23.1515C672.015 22.8774 671.315 22.652 670.675 23.0317L670.675 23.0316L670.663 23.0385C668.043 24.6872 665.272 25.8593 662.432 26.4452C658.461 27.1507 654.652 27.019 651.004 24.6025L650.994 24.5956L650.983 24.5893C649.465 23.6887 648.146 22.2082 647.044 20.2237L647.044 20.2237L647.04 20.2163C646.916 20.0011 646.792 19.8049 646.661 19.65C646.533 19.4976 646.359 19.3383 646.123 19.2683C645.868 19.1927 645.63 19.2461 645.431 19.3443C645.245 19.4362 645.068 19.5794 644.896 19.7382C641.632 22.6883 637.983 24.801 634.272 25.8553C629.881 27.0387 625.604 27.3616 621.496 24.8331L621.494 24.8318C618.73 23.1505 616.601 20.6077 615.473 16.5353C615.516 16.6379 615.561 16.7396 615.608 16.8403C615.787 17.2381 616.049 17.6265 616.282 17.972L616.286 17.9775C617.961 20.8266 620.325 22.594 622.892 23.2283L622.905 23.2316L622.919 23.2342C626.808 23.9704 630.71 23.6038 634.445 21.8828C637.658 20.5379 640.692 18.4669 643.47 15.923C644.021 15.4201 644.404 14.9545 644.583 14.329C644.682 13.9811 644.713 13.6041 644.697 13.1741C644.725 13.2675 644.76 13.3605 644.804 13.4453C644.859 13.5508 644.953 13.6863 645.112 13.7748C645.475 13.9769 645.818 13.7662 645.956 13.6714C646.128 13.5529 646.327 13.3693 646.538 13.1697C647.01 12.7618 647.481 12.3517 647.951 11.9418C650.393 9.81383 652.829 7.69024 655.379 5.89934L655.379 5.89947L655.39 5.89183L656.359 5.17297L657.306 4.47074L658.266 4.56671L657.308 3.58373C655.122 1.33966 652.283 0.278171 649.561 1.04993C648.58 1.24628 647.703 1.77073 646.96 2.51483C647.77 1.66396 648.72 1.08665 649.724 0.821801L649.724 0.821845L649.731 0.820046C652.11 0.158648 654.52 0.912466 656.604 2.85576C657.434 3.6722 658.662 4.04307 659.726 3.27595C663.271 1.29662 667.034 0.490557 670.788 0.954351L670.788 0.954406L670.795 0.955207C674.036 1.30685 677.062 2.23511 679.781 4.99834C680.32 5.56953 680.863 6.25728 681.423 6.96884C681.669 7.38941 682.033 7.71958 682.495 7.79566C682.973 7.87445 683.406 7.65783 683.725 7.28676C685.632 5.75847 687.533 4.4692 689.508 3.41527L689.513 3.41241C693.776 1.0716 698.422 0.373672 702.908 1.30707L702.92 1.30964L702.932 1.31158C705.854 1.76762 708.582 3.48263 710.95 6.29169L710.957 6.29919L710.963 6.30644C711.614 7.01957 712.165 7.91257 712.6 8.92119C712.511 8.76155 712.416 8.60534 712.318 8.45301L712.318 8.45297L712.313 8.44549L712.302 8.42964C712.148 8.20059 711.886 7.81333 711.611 7.53882C709.792 5.57996 707.625 4.32496 705.345 3.93076C704.288 3.42811 703.091 3.31283 701.959 3.31283C697.479 3.31283 693.017 4.91065 689.067 7.83597C688.005 8.53695 686.976 9.36978 685.982 10.1746C685.599 10.4848 685.221 10.7907 684.848 11.0834C684.377 11.4352 684.034 12.0015 683.844 12.644L683.833 12.3571L683.052 13.0153C681.796 14.0729 680.57 15.1519 679.344 16.2305C677.065 18.2359 674.787 20.2402 672.325 22.1047L671.793 22.5075L672.329 22.905C672.507 23.0369 672.662 23.1353 672.788 23.2132C672.813 23.2285 672.836 23.2425 672.856 23.2554C672.95 23.313 673.008 23.3487 673.056 23.3842L673.113 23.4266L673.18 23.4514C676.709 24.7594 680.33 23.0143 682.593 19.1622L682.596 19.1568C682.626 19.1039 682.656 19.0506 682.685 18.9969C682.388 19.5996 682.032 20.1462 681.622 20.6182ZM614.657 10.1922C614.654 10.219 614.651 10.2457 614.648 10.2725C614.7 9.47723 614.836 8.69091 615.084 7.91947L615.084 7.91947L615.086 7.91424C615.95 5.11727 617.421 3.09356 619.288 2.09733L619.301 2.09036L619.314 2.08262C621.114 0.979776 622.874 0.424672 624.583 0.508236C626.282 0.591279 627.991 1.30781 629.695 2.85516C630.893 4.07992 631.884 5.75173 632.511 7.77308C631.328 4.38871 629.113 1.81471 626.365 1.28998C623.078 0.276793 619.746 1.4576 617.15 4.43184C615.764 5.85065 614.928 7.96771 614.657 10.1922ZM706.682 23.9486C708.547 23.5954 710.301 22.433 711.725 20.6917C710.368 22.6882 708.591 23.8738 706.708 24.2896C704.938 24.615 703.147 24.0732 701.629 22.8347L701.62 22.8274L701.61 22.8205C701.579 22.7971 701.567 22.7801 701.562 22.7713C701.557 22.7625 701.55 22.7471 701.547 22.717C701.54 22.6579 701.548 22.5609 701.592 22.4081C703.037 23.8289 704.916 24.4609 706.682 23.9486ZM647.085 18.1737L646.766 18.4543L646.991 18.8149C648.099 20.5826 649.548 21.7191 651.072 22.4723L651.093 22.4827L651.115 22.491C653.685 23.4743 656.363 23.8534 658.976 23.3552C662.03 22.8647 664.998 21.7631 667.796 20.0546L667.796 20.0547L667.804 20.0498L667.823 20.0375C667.948 19.9585 668.076 19.877 668.173 19.7977C668.274 19.715 668.432 19.564 668.473 19.3216C668.512 19.0902 668.422 18.8966 668.363 18.7858C668.303 18.6727 668.215 18.5418 668.124 18.4077L668.112 18.3898C667.794 17.9176 667.494 17.4446 667.191 16.9644L667.189 16.9616C666.888 16.4858 666.583 16.0029 666.257 15.519C665.983 15.0933 665.711 14.6662 665.44 14.2398C664.121 12.1688 662.813 10.1147 661.394 8.3096C661.133 7.92952 660.763 7.65743 660.322 7.58727C659.879 7.51693 659.442 7.66218 659.074 7.96475C656.083 9.96879 653.205 12.6066 650.366 15.2089C649.268 16.2154 648.176 17.2166 647.085 18.1737ZM661.077 6.78159L660.708 7.08521L660.994 7.46736C663.404 10.6829 665.575 14.1397 667.759 17.6173L667.763 17.6242L667.768 17.631C667.967 17.9264 668.145 18.1845 668.314 18.3782C668.48 18.5683 668.689 18.7601 668.969 18.837C669.269 18.9194 669.545 18.8434 669.781 18.7251C670.007 18.6121 670.248 18.434 670.509 18.2254C673.304 16.1071 676.055 13.7047 678.742 11.3571C679.564 10.6388 680.381 9.92561 681.191 9.22731L681.208 9.21319C681.371 9.07883 681.53 8.94842 681.643 8.8267C681.765 8.69649 681.914 8.49554 681.914 8.21587C681.914 7.96018 681.786 7.75289 681.685 7.61079C681.58 7.46405 681.43 7.29171 681.262 7.09714L681.247 7.07958L681.236 7.06752L681.225 7.05614C679.64 5.44879 677.779 4.30701 675.799 3.92231C672.492 3.18792 669.181 3.30941 665.954 4.28743C664.254 4.66911 662.575 5.54717 661.077 6.78159Z" fill="#F6ECED" stroke="#F6E9E9" />
                    </svg>
                </div>
            </footer>
        </main >
    );
}

export default Page;
