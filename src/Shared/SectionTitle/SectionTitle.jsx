const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="max-w-lg mx-auto my-10 text-center">
            <p className="text-[#D99904] text-xl mb-3"> --- {subHeading} ---</p>
            <h2 className="text-[#151515] text-3xl border-y-4 border-[#E8E8E8] py-5">{heading}</h2>
        </div>
    );
};

export default SectionTitle;