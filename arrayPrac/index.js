const Tags =  [
    {
        "Key": "snapshots_lifecycle_policy",
        "Value": "daily_30"
    },
    {
        "Key": "aws:dlm:expirationTime",
        "Value": "2020-12-06T17:29:27.017Z"
    },
    {
        "Key": "aws:dlm:lifecycle-schedule-name",
        "Value": "Daily"
    },
    {
        "Key": "dlm:managed",
        "Value": "true"
    },
    {
        "Key": "snapshots_frequency",
        "Value": "daily"
    },
    {
        "Key": "Name",
        "Value": "dev-spark01"
    },
    {
        "Key": "aws:dlm:lifecycle-policy-id",
        "Value": "policy-048d544417ceb77d2"
    },
    {
        "Key": "snapshots_retension",
        "Value": "30"
    },
    {
        "Key": "sf-finance2",
        "Value": "853010-23110"
    }
]
const form = document.querySelector("#form");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const inp = form.elements.inp.value;
    for(let tag of Tags){
        if(inp === tag.Key )
        console.log(tag.Value)
    }
})
